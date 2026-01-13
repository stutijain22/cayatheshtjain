import React from 'react';
import Reveal from '../../components/Reveal';
import '../Project.css';

const StandardDisclosures = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <Reveal direction="up" className="disclaimer-reveal">
                    <div className="rra-header">
                        <h1 className="rra-title">Standard Disclosures</h1>
                        <p className="rra-subtitle">Transparency and integrity in our research services</p>
                    </div>
                </Reveal>

                {/* Main Content Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>

                        {/* About RA */}
                        <Reveal direction="up" delay={0.2} className="disclaimer-reveal">
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>About the Research Analyst</h2>
                                <p style={{ marginBottom: '1rem' }}>
                                    <strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, is a SEBI-registered Research Analyst.
                                </p>
                                <p>
                                    Registration Number <strong>INH000022844</strong> on August 21, 2025.
                                </p>
                            </div>
                        </Reveal>

                        {/* Educational Background */}
                        <Reveal direction="up" delay={0.4} className="disclaimer-reveal">
                            <div style={{ marginBottom: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                                <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Educational Background</h2>
                                <p>
                                    <strong>Yathesht Jain</strong> has completed Bachelor of Commerce and possesses deep analytical skills in the equity markets.
                                </p>
                            </div>
                        </Reveal>

                        {/* Disciplinary History */}
                        <Reveal direction="up" delay={0.6} className="disclaimer-reveal">
                            <div style={{ marginBottom: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                                <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Disciplinary History</h2>
                                <p>
                                    There are no outstanding litigations and no disciplinary history against <strong>Yathesht Jain</strong>.
                                </p>
                            </div>
                        </Reveal>

                        {/* Conflict of Interest */}
                        <Reveal direction="up" delay={0.8} className="disclaimer-reveal">
                            <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                                <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Conflict of Interest Disclosure</h2>
                                <p><strong>Yathesht Jain</strong> and his associates do not hold any material conflict of interest that would compromise the independence of research reports.</p>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StandardDisclosures;
