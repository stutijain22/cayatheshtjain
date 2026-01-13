import React from 'react';
import Reveal from '../../components/Reveal';
import '../Project.css';

const PrivacyPolicy = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <Reveal direction="up" className="disclaimer-reveal">
                    <div className="rra-header">
                        <h1 className="rra-title">Privacy Policy</h1>
                        <p className="rra-subtitle">Protecting your personal data with integrity</p>
                    </div>
                </Reveal>

                {/* Content Box */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>
                        <Reveal direction="up" delay={0.2} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem' }}>
                                This Policy outlines <strong>Yathesht Jain</strong> (hereafter “Yathesht Jain”, “we”, “us”, or “our”) practices in relation to the storage, use, processing, and disclosure of personal data that you have chosen to share with us when you access our website, value-added services, research reports, or related offerings (hereafter “Services”) on or through our technology platforms, including but not limited to this website (collectively “Platform”).
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.4} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem' }}>
                                At Yathesht Jain, we are committed to protecting the privacy and confidentiality of your personal information. This Privacy Policy explains how we collect, use, and disclose the personal information you provide to us when using our website. This policy is effective from <strong>21st August 2025</strong>.
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.6} className="disclaimer-reveal">
                            <div>
                                <h2 className="section-title-small" style={{ color: 'var(--primary)', marginTop: '2rem' }}>Collection of Information</h2>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    When you visit our website at <a href="https://cayathesht.com/" style={{ color: 'var(--secondary)' }}>https://cayathesht.com/</a>, we may collect certain information automatically, including your IP address, browser type, operating system, and referring website URLs. We may also collect information about your usage patterns and preferences on our website.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.8} className="disclaimer-reveal">
                            <div>
                                <h2 className="section-title-small" style={{ color: 'var(--primary)', marginTop: '2rem' }}>Use of Information</h2>
                                <p style={{ marginBottom: '1rem' }}>
                                    We use the collected information to improve our website and enhance your user experience. We may also use your personal information to communicate with you, provide you with updates and information about our services, and respond to your inquiries or requests.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={1.0} className="disclaimer-reveal">
                            <div className="contact-info-block" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(43, 103, 119, 0.1)' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontSize: '1.4rem' }}>Contact Us</h2>
                                <p style={{ marginBottom: '0.8rem' }}><strong>Email:</strong> <a href="mailto:cayathesht@gmail.com" style={{ color: 'var(--secondary)' }}>cayathesht@gmail.com</a></p>
                                <p style={{ marginBottom: '0.8rem' }}><strong>Phone:</strong> <a href="tel:+919636950969" style={{ color: 'var(--secondary)' }}>+91 9636950969</a></p>
                                <p><strong>Address:</strong> Barkat Nagar, Jaipur, Rajasthan - 302020, India</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
