import React from 'react';
import '../Project.css';

const CodeOfConduct = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <div className="rra-header">
                    <h1 className="rra-title">Code of Conduct</h1>
                    <p className="rra-subtitle">SEBI (Research Analyst) Regulations, 2014</p>
                </div>

                {/* Single Consolidated Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left' }}>
                        <p className="rra-address-text" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            <strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, is a SEBI Registered Research Analyst vide Registration Number <strong>INH000022844</strong> dated August 21, 2025.
                        </p>

                        <p className="rra-address-text" style={{ marginBottom: '2rem', fontSize: '1rem', opacity: 0.9 }}>
                            In accordance with Regulation 24 (2) of the SEBI (Research Analyst) Regulations, 2014, I shall maintain the following Code of Conduct:
                        </p>

                        <div className="coc-points-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="coc-point">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span>🤝</span> Honesty and Good Faith
                                </h3>
                                <p className="rra-address-text" style={{ fontSize: '0.95rem', marginLeft: '2.2rem' }}>
                                    I shall act honestly and in good faith.
                                </p>
                            </div>

                            <div className="coc-point">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span>🔍</span> Diligence
                                </h3>
                                <p className="rra-address-text" style={{ fontSize: '0.95rem', marginLeft: '2.2rem' }}>
                                    I shall act with due skill, care and diligence and shall ensure that the research report is prepared after thorough analysis.
                                </p>
                            </div>

                            <div className="coc-point">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span>⚖️</span> Conflict of Interest
                                </h3>
                                <p className="rra-address-text" style={{ fontSize: '0.95rem', marginLeft: '2.2rem' }}>
                                    I shall effectively address conflict of interest which may affect the impartiality of research analysis and research report and shall make appropriate disclosures to address the same.
                                </p>
                            </div>

                            <div className="coc-point">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span>🚫</span> Insider Trading or Front Running
                                </h3>
                                <p className="rra-address-text" style={{ fontSize: '0.95rem', marginLeft: '2.2rem' }}>
                                    I shall not engage in insider trading or front running of my own research report.
                                </p>
                            </div>

                            <div className="coc-point">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span>🔒</span> Confidentiality
                                </h3>
                                <p className="rra-address-text" style={{ fontSize: '0.95rem', marginLeft: '2.2rem' }}>
                                    I shall maintain confidentiality of report till the report is made public.
                                </p>
                            </div>

                            <div className="coc-point">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span>🏆</span> Professional Standard
                                </h3>
                                <p className="rra-address-text" style={{ fontSize: '0.95rem', marginLeft: '2.2rem' }}>
                                    I am engaged in research analysis and shall observe high professional standard while preparing research report.
                                </p>
                            </div>

                            <div className="coc-point">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span>📜</span> Compliance
                                </h3>
                                <p className="rra-address-text" style={{ fontSize: '0.95rem', marginLeft: '2.2rem' }}>
                                    I shall comply with all regulatory requirements applicable to the conduct of its business activities.
                                </p>
                            </div>

                            <div className="coc-point">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span>👔</span> Responsibility of Senior Management
                                </h3>
                                <p className="rra-address-text" style={{ fontSize: '0.95rem', marginLeft: '2.2rem' }}>
                                    I shall bear primary responsibility of senior management for ensuring the maintenance of appropriate standards of conduct and adherence to proper procedures.
                                </p>
                            </div>
                        </div>

                        <div className="coc-footer" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                            <p className="rra-address-text" style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                                Regards,
                            </p>
                            <h3 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '0.2rem' }}>Yathesht Jain</h3>
                            <p className="rra-address-text" style={{ fontStyle: 'italic', fontSize: '0.95rem', opacity: 0.8 }}>
                                (Proprietor of Yathesht Jain)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeOfConduct;
