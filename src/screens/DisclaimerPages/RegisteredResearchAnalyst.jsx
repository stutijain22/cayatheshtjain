import React from 'react';
import Reveal from '../../components/Reveal';
import '../Project.css';

const RegisteredResearchAnalyst = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">

                {/* Header */}
                <Reveal direction="up" className="disclaimer-reveal">
                    <div className="rra-header">
                        <div className="rra-badge">SEBI Registered</div>
                        <h1 className="rra-title">Registered Research Analyst</h1>
                        <p className="rra-subtitle">Securities and Exchange Board of India (SEBI)</p>
                    </div>
                </Reveal>

                {/* Main Content */}
                <div className="rra-content-grid">
                    {/* Registration Details Card */}
                    <div className="rra-card primary-card">
                        <Reveal direction="up" delay={0.2} className="disclaimer-reveal">
                            <div className="rra-card-header">
                                <div className="rra-icon">📋</div>
                                <h2>Registration Details</h2>
                            </div>
                        </Reveal>

                        <div className="rra-details-list">
                            <Reveal direction="up" delay={0.3} className="disclaimer-reveal">
                                <div className="rra-detail-item">
                                    <span className="rra-label">Registered Name</span>
                                    <span className="rra-value">Yathesht Jain</span>
                                </div>
                            </Reveal>
                            <div className="rra-divider"></div>

                            <Reveal direction="up" delay={0.4} className="disclaimer-reveal">
                                <div className="rra-detail-item">
                                    <span className="rra-label">Registration Number</span>
                                    <span className="rra-value highlight">INH000022844</span>
                                </div>
                            </Reveal>
                            <div className="rra-divider"></div>

                            <Reveal direction="up" delay={0.5} className="disclaimer-reveal">
                                <div className="rra-detail-item">
                                    <span className="rra-label">License Type</span>
                                    <span className="rra-value">Individual</span>
                                </div>
                            </Reveal>
                            <div className="rra-divider"></div>

                            <Reveal direction="up" delay={0.6} className="disclaimer-reveal">
                                <div className="rra-detail-item">
                                    <span className="rra-label">Brand Name</span>
                                    <span className="rra-value">Vijay Thakkar Research Services</span>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="rra-card">
                        <Reveal direction="up" delay={0.7} className="disclaimer-reveal">
                            <div className="rra-card-header">
                                <div className="rra-icon">📍</div>
                                <h2>Registered Address</h2>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.8} className="disclaimer-reveal">
                            <div className="rra-address-content">
                                <p className="rra-address-text">
                                    Flat no 1802, Shree Sainath CHS,<br />
                                    Parsi Panchayat Road,<br />
                                    Andheri East, Mumbai,<br />
                                    Maharashtra, 400069,<br />
                                    India
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Compliance Officer Card */}
                    <div className="rra-card compliance-card">
                        <Reveal direction="up" delay={0.9} className="disclaimer-reveal">
                            <div className="rra-card-header">
                                <div className="rra-icon">👤</div>
                                <h2>Compliance Officer</h2>
                            </div>
                        </Reveal>

                        <div className="rra-details-list">
                            <Reveal direction="up" delay={1.0} className="disclaimer-reveal">
                                <div className="rra-detail-item">
                                    <span className="rra-label">Name</span>
                                    <span className="rra-value">Yathesht Jain</span>
                                </div>
                            </Reveal>
                            <div className="rra-divider"></div>

                            <Reveal direction="up" delay={1.1} className="disclaimer-reveal">
                                <div className="rra-detail-item">
                                    <span className="rra-label">Email</span>
                                    <a href="mailto:cayathesht@gmail.com" className="rra-value-link">
                                        cayathesht@gmail.com
                                    </a>
                                </div>
                            </Reveal>
                            <div className="rra-divider"></div>

                            <Reveal direction="up" delay={1.2} className="disclaimer-reveal">
                                <div className="rra-detail-item">
                                    <span className="rra-label">Phone</span>
                                    <a href="tel:+919636950969" className="rra-value-link">
                                        +91 9636950969
                                    </a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisteredResearchAnalyst;
