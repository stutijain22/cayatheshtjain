import React from 'react';
import Reveal from '../../components/Reveal';
import '../Project.css';

const InvestorCharter = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <Reveal direction="up" className="disclaimer-reveal">
                    <div className="rra-header">
                        <h1 className="rra-title">Investor Charter</h1>
                        <p className="rra-subtitle">Investor Charter in respect of Research Analysts (RA)</p>
                    </div>
                </Reveal>

                {/* Single Consolidated Card for all 6 points */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content">

                        {/* 1. Vision & Mission */}
                        <Reveal direction="up" delay={0.2} className="disclaimer-reveal">
                            <div style={{ marginBottom: '3rem' }}>
                                <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>1. Vision and Mission Statements for Investors</h2>
                                <div style={{ padding: '0 0.5rem' }}>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Vision</h3>
                                        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Invest with knowledge & safety.</p>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Mission</h3>
                                        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* 2. Business Transacted */}
                        <Reveal direction="up" delay={0.4} className="disclaimer-reveal">
                            <div style={{ marginBottom: '3rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
                                <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>2. Details of Business Transacted by the RA</h2>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        'To publish research report based on the research activities of the RA To provide an independent unbiased view on securities.',
                                        'To offer unbiased recommendation, disclosing the financial interests in recommended securities.',
                                        'To provide research recommendation, based on analysis of publicly available information and known observations.',
                                        'To conduct audit annually'
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                            <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span>
                                            <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        {/* 4. Grievance Redressal */}
                        <Reveal direction="up" delay={0.6} className="disclaimer-reveal">
                            <div style={{ marginBottom: '3rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
                                <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>4. Details of Grievance Redressal Mechanism</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px' }}>
                                        <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Mode of filing the complaint</h3>
                                        <p style={{ lineHeight: '1.7' }}>
                                            An investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than <strong>21 days</strong> of the receipt of the grievance.
                                        </p>
                                    </div>
                                    <div style={{ padding: '1.5rem', background: 'rgba(43, 103, 119, 0.03)', borderRadius: '12px' }}>
                                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Physical Complaints Address:</h3>
                                        <address style={{ fontStyle: 'normal', lineHeight: '1.6' }}>
                                            Office of Investor Assistance and Education, SEBI Bhavan, Bandra-Kurla Complex, Mumbai – 400 051
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorCharter;
