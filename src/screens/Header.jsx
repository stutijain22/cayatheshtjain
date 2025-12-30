import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import Button from '../components/Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const sections = ['home', 'know-your-ra', 'why-us', 'pricing', 'courses', 'faqs', 'contact'];

    useEffect(() => {
        const handleScroll = () => {
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId); // Set active immediately on click
        }
        setIsMenuOpen(false);
    };

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
                            <a
                                href="#home"
                                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#know-your-ra"
                                className={`nav-link ${activeSection === 'know-your-ra' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('know-your-ra'); }}
                            >
                                Know Your RA
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#pricing"
                                className={`nav-link ${activeSection === 'pricing' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
                            >
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#courses"
                                className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }}
                            >
                                Courses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#faqs"
                                className={`nav-link ${activeSection === 'faqs' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('faqs'); }}
                            >
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#contact"
                                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                            >
                                Contact
                            </a>
                        </li>

                        <Link to="/auth" className="login-btn-link">
                            <Button variant="primary" className="login-btn">
                                Login
                            </Button>
                        </Link>
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
