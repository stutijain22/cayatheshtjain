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

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                    }
                }
            }
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
                    <img src="/webLogo.jpg" alt="CA Yathesht Jain" className="header-logo" />
                    <div className="logo-text-group">
                        <span className="logo-name-main">Yathesht Jain</span>
                    </div>
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <span
                                className={`nav-link ${activeSection === 'home' && !isDisclaimersOpen ? 'active' : ''}`}
                                onClick={() => scrollToSection('home')}
                            >
                                Home
                            </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={`nav-link ${activeSection === 'know-your-ra' && !isDisclaimersOpen ? 'active' : ''}`}
                                onClick={() => scrollToSection('know-your-ra')}
                            >
                                Know Your RA
                            </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={`nav-link ${activeSection === 'pricing' && !isDisclaimersOpen ? 'active' : ''}`}
                                onClick={() => scrollToSection('pricing')}
                            >
                                Pricing
                            </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={`nav-link ${activeSection === 'courses' && !isDisclaimersOpen ? 'active' : ''}`}
                                onClick={() => scrollToSection('courses')}
                            >
                                Courses
                            </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={`nav-link ${activeSection === 'faqs' && !isDisclaimersOpen ? 'active' : ''}`}
                                onClick={() => scrollToSection('faqs')}
                            >
                                FAQs
                            </span>
                        </li>
                        {/* Disclaimers Dropdown */}
                        <li className="nav-item dropdown-item">
                            <div
                                className={`nav-link dropdown-toggle ${isDisclaimersOpen ? 'active' : ''}`}
                                onClick={(e) => {
                                    toggleDisclaimers(e);
                                }}
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
                                    <Link to="/bank-account-details" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Bank Account Details
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/registered-research-analyst" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Registered Research Analyst
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/code-of-conduct" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Code of Conduct
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/complaints-data" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Complaints Data
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/escalation-matrix" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Escalation Matrix
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/general-disclaimer" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        General Disclaimer
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/investor-charter" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Investor Charter
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/privacy-policy" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Privacy Policy
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/standard-disclosures" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Standard Disclosures
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/grievance-redressal" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Grievance Redressal
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/terms-of-use" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Terms of Use
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/refund" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Refund
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/mitc" className="dropdown-link" onClick={() => setIsDisclaimersOpen(false)}>
                                        Most Important Terms & Conditions
                                    </Link>
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
