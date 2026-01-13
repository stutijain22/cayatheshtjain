import React from 'react';
import Reveal from '../../components/Reveal';
import '../Project.css';

const TermsOfUse = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <Reveal direction="up" className="disclaimer-reveal">
                    <div className="rra-header">
                        <h1 className="rra-title">Terms of Use</h1>
                        <p className="rra-subtitle">Governing your access and use of our platform</p>
                    </div>
                </Reveal>

                {/* Main Content Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>

                        <Reveal direction="up" delay={0.2} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem' }}>
                                This Policy outlines <strong>Yathesht Jain</strong> (hereafter “Yathesht Jain”, “we”, “us”, or “our”) practices in relation to the storage, use, processing, and disclosure of personal data that you have chosen to share with us when you access our website, value-added services, research reports, and related offerings (hereafter “Services”) on or through our technology platforms, including but not limited to this website (collectively “Platform”).
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.4} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem' }}>
                                Welcome to <strong>Yathesht Jain</strong>! These Terms of Use govern your use of our website located at <a href="https://cayathesht.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>https://cayathesht.com/</a>. By accessing or using our website, you agree to comply with these Terms of Use. This policy is effective from <strong>21 August 2025</strong>.
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.6} className="disclaimer-reveal">
                            <div style={{ marginBottom: '2rem' }}>
                                <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>Intellectual Property</h2>
                                <p>
                                    All content on our website, including but not limited to text, graphics, logos, images, audio clips, video clips, research reports, and software, is the property of <strong>Yathesht Jain</strong> or its licensors and is protected by applicable intellectual property laws.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.8} className="disclaimer-reveal">
                            <div style={{ marginBottom: '2rem' }}>
                                <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>User Conduct</h2>
                                <p style={{ marginBottom: '0.5rem' }}>When using our website, you agree to comply with all applicable laws and use our website only for lawful purposes.</p>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={1.0} className="disclaimer-reveal">
                            {/* Contact Us */}
                            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Contact Us</h2>
                                <p style={{ marginBottom: '0.5rem' }}>If you have any questions or concerns about these Terms of Use, please contact us:</p>
                                <div style={{ marginTop: '1rem' }}>
                                    <p><strong>Email:</strong> <a href="mailto:cayathesht@gmail.com" style={{ color: 'var(--secondary)' }}>cayathesht@gmail.com</a></p>
                                    <p><strong>Phone:</strong> +91 9636950969</p>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
