import React from 'react';
import Reveal from '../../components/Reveal';
import '../Project.css';

const MITC = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <Reveal direction="up" className="disclaimer-reveal">
                    <div className="rra-header">
                        <h1 className="rra-title">Most Important Terms & Conditions</h1>
                        <p className="rra-subtitle">Key terms for our research services</p>
                    </div>
                </Reveal>

                {/* Main Content Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>

                        <Reveal direction="up" delay={0.2} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem' }}>
                                <strong>Yathesht Jain</strong> (“Research Analyst”) is registered with the Securities and Exchange Board of India (SEBI) as a Research Analyst under Registration No. <strong>INH000022844</strong>.
                            </p>
                        </Reveal>

                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Reveal direction="up" delay={0.4} className="disclaimer-reveal">
                                <li>The terms and conditions and the consent thereon are for the research services provided by the Research Analyst (RA). The RA cannot execute or carry out any trade on behalf of the client.</li>
                            </Reveal>

                            <Reveal direction="up" delay={0.6} className="disclaimer-reveal">
                                <li>The fee charged by the RA to the client will be subject to the maximum amount prescribed by SEBI / RAASB from time to time.</li>
                            </Reveal>

                            <Reveal direction="up" delay={0.8} className="disclaimer-reveal">
                                <li style={{ listStyle: 'none', paddingLeft: '0' }}>
                                    <div style={{ background: 'rgba(82, 171, 152, 0.05)', padding: '1rem 1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
                                        <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Note:</p>
                                        <p>The current fee limit is <strong>Rs 1,51,000/-</strong> per annum per family of client for all research services.</p>
                                    </div>
                                </li>
                            </Reveal>

                            <Reveal direction="up" delay={1.0} className="disclaimer-reveal">
                                <li>Cash payment is not allowed. All fees must be paid through banking channels like UPI, IMPS, or NEFT.</li>
                            </Reveal>
                        </ul>

                        <Reveal direction="up" delay={1.2} className="disclaimer-reveal">
                            <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                                <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '1.2rem' }}>Grievance Redressal Mechanism</h2>
                                <p><strong>Step 1:</strong> For any support-related grievances, email <strong>cayathesht@gmail.com</strong>. Issues will be resolved within 21 days.</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MITC;
