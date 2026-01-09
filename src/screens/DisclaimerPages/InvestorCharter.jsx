import React from 'react';
import '../Project.css';

const InvestorCharter = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <div className="rra-header">
                    <h1 className="rra-title">Investor Charter</h1>
                    <p className="rra-subtitle">Investor Charter in respect of Research Analysts (RA)</p>
                </div>

                {/* Single Consolidated Card for all 6 points */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content">

                        {/* 1. Vision & Mission */}
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

                        {/* 2. Business Transacted */}
                        <div style={{ marginBottom: '3rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>2. Details of Business Transacted by the RA</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'To publish research report based on the research activities of the RA To provide an independent unbiased view on securities.',
                                    'To offer unbiased recommendation, disclosing the financial interests in recommended securities.',
                                    'To provide research recommendation, based on analysis of publicly available information and known observations.',
                                    'To conduct audit annually',
                                    'To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.',
                                    'To maintain records of interactions, with all clients including prospective clients (prior to onboarding).'
                                ].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span>
                                        <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Services Provided */}
                        <div style={{ marginBottom: '3rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>3. Details of Services Provided to Investors</h2>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '1rem' }}>Onboarding of Clients</h3>
                                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                                    <li>Sharing terms and conditions of research services</li>
                                    <li>Completing KYC of fee-paying clients</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '1rem' }}>Disclosure to Clients</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        'To disclose information that is material for the client to make an informed decision.',
                                        'To disclose the extent of use of Artificial Intelligence tools in providing research services.',
                                        'To disclose any material conflict of interest of third party research providers.',
                                        'To disclose any conflict of interest with other activities of the research analyst.',
                                        'To distribute research reports and recommendations to the clients without discrimination.',
                                        'To maintain confidentiality w.r.t publication until made available in public domain.',
                                        'To respect data privacy rights of clients and protect unauthorized use of information.',
                                        'To disclose timelines for services and ensure adherence.',
                                        'To provide clear guidance and adequate caution notice for complex/high-risk products.',
                                        'To treat all clients with honesty and integrity.'
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 4. Grievance Redressal */}
                        <div style={{ marginBottom: '3rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>4. Details of Grievance Redressal Mechanism</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px' }}>
                                    <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Mode of filing the complaint</h3>
                                    <p style={{ lineHeight: '1.7' }}>
                                        An investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than <strong>21 days</strong> of the receipt of the grievance.
                                    </p>
                                </div>
                                <div style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px' }}>
                                    <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>SCORES 2.0 & SMARTODR</h3>
                                    <p style={{ marginBottom: '1rem' }}><strong>SCORES 2.0 Portal:</strong> <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '600' }}>scores.sebi.gov.in</a></p>
                                    <p>If not satisfied, investors can file on <strong>SMARTODR</strong> platform (<a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '600' }}>smartodr.in</a>) for online conciliation or arbitration.</p>
                                </div>
                                <div style={{ padding: '1.5rem', background: 'rgba(43, 103, 119, 0.03)', borderRadius: '12px' }}>
                                    <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Physical Complaints Address:</h3>
                                    <address style={{ fontStyle: 'normal', lineHeight: '1.6' }}>
                                        Office of Investor Assistance and Education<br />
                                        Securities and Exchange Board of India<br />
                                        SEBI Bhavan, Plot No. C4-A, ‘G’ Block<br />
                                        Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051
                                    </address>
                                </div>
                            </div>
                        </div>

                        {/* 5. Rights of Investors */}
                        <div style={{ marginBottom: '3rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>5. Rights of Investors</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                                {[
                                    'Right to Privacy and Confidentiality', 'Right to Transparent Practices',
                                    'Right to Fair and Equitable Treatment', 'Right to Adequate Information',
                                    'Right to Initial and Continuing Disclosure', 'Right to receive statutory/regulatory info',
                                    'Right to Fair & True Advertisement', 'Right to be Heard & Grievance Redressal',
                                    'Right to Timely Redressal', 'Right to Clear Guidance on High-Risk Products',
                                    'Right to provide feedback', 'Right against coercive/one-sided clauses'
                                ].map((right, i) => (
                                    <div key={i} style={{ padding: '1rem', border: '1px solid rgba(82, 171, 152, 0.1)', borderRadius: '8px', fontSize: '0.95rem' }}>
                                        {right}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 6. Expectations (Do's and Don'ts) */}
                        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>6. Expectations from the Investors (Responsibilities)</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                {/* Do's */}
                                <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '16px', border: '1px solid #bcf0da' }}>
                                    <h3 style={{ color: '#166534', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span>✅</span> Do's
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#166534' }}>
                                        {[
                                            'Always deal with SEBI-registered Research Analysts',
                                            'Ensure RA has valid SEBI registration',
                                            'Pay attention towards disclosures in research reports',
                                            'Pay through banking channels only',
                                            'Check research recommendations before buying/selling',
                                            'Ask relevant questions and clear doubts before acting',
                                            'Inform SEBI about RA offering assured returns'
                                        ].map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                                                <span>•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Don'ts */}
                                <div style={{ background: '#fff1f2', padding: '1.5rem', borderRadius: '16px', border: '1px solid #fecdd3' }}>
                                    <h3 style={{ color: '#991b1b', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span>❌</span> Don'ts
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#991b1b' }}>
                                        {[
                                            'Do not provide funds for investment to the Research Analyst',
                                            'Don’t fall prey to luring advertisements or market rumors',
                                            'Do not get attracted to limited period discounts or gifts',
                                            'Do not share login credentials/passwords for your accounts'
                                        ].map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                                                <span>•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorCharter;
