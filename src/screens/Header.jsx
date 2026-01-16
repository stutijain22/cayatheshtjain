import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import './Project.css';
import Button from '../components/Button';
import { useToast } from '../components/ToastContext';

const sections = ['home', 'know-your-ra', 'why-us', 'pricing', 'courses', 'faqs', 'contact'];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isDisclaimersOpen, setIsDisclaimersOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { showToast } = useToast();

    useEffect(() => {
        // Check if user is logged in
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            setUser(null);
        }
    }, [location.pathname]); // Update when navigating back from Login

    const handleLogout = () => {
        const userName = user?.name ? user.name.split(' ')[0] : 'User';
        googleLogout(); // Clears Google session
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        setUser(null);
        setIsMenuOpen(false); // Close mobile drawer
        showToast(`Goodbye, ${userName}! Logged out successfully.`);
        navigate('/');
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDisclaimers = (e) => {
        if (e && e.stopPropagation) e.stopPropagation();

        // If we are opening the dropdown, scroll to top first
        if (!isDisclaimersOpen) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        setIsDisclaimersOpen(!isDisclaimersOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Only update active section if we are on the home page
            if (location.pathname !== '/') {
                if (activeSection !== '') setActiveSection('');
                return;
            }

            const scrollPosition = window.scrollY + 100; // Offset for header height
            const windowHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;

            // Check if we are at the very bottom (footer area)
            if (window.scrollY + windowHeight >= scrollHeight - 50) {
                setActiveSection('');
                return;
            }

            let currentSection = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        // Call it initially
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname, activeSection]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDisclaimersOpen && !event.target.closest('.dropdown-item')) {
                setIsDisclaimersOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDisclaimersOpen]);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveSection(sectionId); // Set active immediately on click
            }
        }
        setIsMenuOpen(false);
        setIsDisclaimersOpen(false); // Close dropdown on section click
    };

    // Handle scrolling when navigating from other pages
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;
            const element = document.getElementById(sectionId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveSection(sectionId);
                }, 100);
            }
            // Clear state so it doesn't scroll again on refresh
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location.pathname, location.state, navigate]);

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
                    <img src="/headerLogoImage.jpg" alt="CA Yathesht Jain" className="header-logo" />
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        {/* Main Navigation Items */}
                        {[
                            { id: 'home', label: 'Home' },
                            { id: 'know-your-ra', label: 'Know Your RA' },
                            { id: 'pricing', label: 'Pricing' },
                            { id: 'courses', label: 'Courses' },
                            { id: 'faqs', label: 'FAQs' }
                        ].map((item) => (
                            <li className="nav-item" key={item.id}>
                                <span
                                    className={`nav-link ${activeSection === item.id && !isDisclaimersOpen ? 'active' : ''}`}
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.label}
                                </span>
                            </li>
                        ))}

                        {/* Disclaimers Dropdown (Dynamic) */}
                        <li className="nav-item dropdown-item">
                            <div
                                className={`nav-link dropdown-toggle ${isDisclaimersOpen ? 'active' : ''}`}
                                onClick={(e) => toggleDisclaimers(e)}
                                style={{ cursor: 'pointer', userSelect: 'none' }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        toggleDisclaimers();
                                    }
                                }}
                            >
                                Disclaimers
                                <span className={`dropdown-arrow ${isDisclaimersOpen ? 'open' : ''}`} style={{ fontSize: '1.4rem', marginLeft: '0.4rem' }}>▾</span>
                            </div>
                            {isDisclaimersOpen && (
                                <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                    {[
                                        { to: '/bank-account-details', label: 'Bank Account Details' },
                                        { to: '/registered-research-analyst', label: 'Registered Research Analyst' },
                                        { to: '/code-of-conduct', label: 'Code of Conduct' },
                                        { to: '/complaints-data', label: 'Complaints Data' },
                                        { to: '/escalation-matrix', label: 'Escalation Matrix' },
                                        { to: '/general-disclaimer', label: 'General Disclaimer' },
                                        { to: '/investor-charter', label: 'Investor Charter' },
                                        { to: '/privacy-policy', label: 'Privacy Policy' },
                                        { to: '/standard-disclosures', label: 'Standard Disclosures' },
                                        { to: '/grievance-redressal', label: 'Grievance Redressal' },
                                        { to: '/terms-of-use', label: 'Terms of Use' },
                                        { to: '/refund', label: 'Refund' },
                                        { to: '/mitc', label: 'Most Important Terms & Conditions' }
                                    ].map((link, index, array) => (
                                        <React.Fragment key={link.to}>
                                            <Link
                                                to={link.to}
                                                className="dropdown-link"
                                                onClick={() => setIsDisclaimersOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                            {index < array.length - 1 && <div className="dropdown-divider"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li className="nav-item">
                            <span
                                className={`nav-link ${activeSection === 'contact' && !isDisclaimersOpen ? 'active' : ''}`}
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact
                            </span>
                        </li>

                        {user ? (
                            <li className="nav-item">
                                <Button variant="primary" className="logout-btn" onClick={handleLogout}>
                                    Logout ({user.name.split(' ')[0]})
                                </Button>
                            </li>
                        ) : (
                            <Link to="/auth" className="login-btn-link" onClick={() => setIsMenuOpen(false)}>
                                <Button variant="primary" className="login-btn">
                                    Login
                                </Button>
                            </Link>
                        )}
                    </ul>
                </nav>

                <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
