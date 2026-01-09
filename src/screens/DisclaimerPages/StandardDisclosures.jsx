import React from 'react';
import '../Project.css';

const StandardDisclosures = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <div className="rra-header">
                    <h1 className="rra-title">Standard Disclosures</h1>
                    <p className="rra-subtitle">Transparency and integrity in our research services</p>
                </div>

                {/* Main Content Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>

                        {/* About RA */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>About the Research Analyst</h2>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, is a SEBI-registered Research Analyst having its registered office at:
                                <br />
                                Barkat Nagar, Jaipur, Rajasthan - 302020, India.
                            </p>
                            <p>
                                <strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, was registered with SEBI as an Individual Research Analyst vide Registration Number <strong>INH000022844</strong> on August 21, 2025, pursuant to which he provides Research Analyst services to clients.
                            </p>
                        </div>

                        {/* Educational Background */}
                        <div style={{ marginBottom: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Educational Background</h2>
                            <p>
                                <strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, has completed Bachelor of Commerce. With strong analytical skills, Yathesht Jain excels in identifying investment opportunities and implementing effective strategies.
                            </p>
                        </div>

                        {/* Business Activities */}
                        <div style={{ marginBottom: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Business Activities</h2>
                            <p>
                                <strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, provides research recommendations based on both fundamental and technical analysis.
                            </p>
                        </div>

                        {/* Disciplinary History */}
                        <div style={{ marginBottom: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Disciplinary History</h2>
                            <p>
                                There are no outstanding litigations and no disciplinary history against <strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>.
                            </p>
                        </div>

                        {/* Terms and Conditions */}
                        <div style={{ marginBottom: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Terms and Conditions</h2>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li><strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, has exercised due diligence in verifying the correctness and authenticity of the information contained herein, as far as it relates to current and historical information. However, accuracy or completeness is not guaranteed.</li>
                                <li>The opinions expressed are based on current research as of the date mentioned and are subject to change without prior notice.</li>
                                <li><strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, does not accept any liability arising from the use of this document or the information contained herein.</li>
                                <li>Recipients of this material should rely on their own judgment and seek professional advice before acting on the information provided.</li>
                                <li><strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, shall not be responsible for any loss or damage that may arise due to any inadvertent error in the information, views, or opinions expressed.</li>
                            </ul>
                        </div>

                        {/* Conflict of Interest */}
                        <div style={{ marginBottom: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Conflict of Interest Disclosure</h2>
                            <p style={{ marginBottom: '1rem' }}><strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, and his associates, including relatives:</p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                                <li>Do not hold any financial interest in the Company.</li>
                                <li>Do not have actual/beneficial ownership of more than 1% in the Company.</li>
                                <li>Do not have any material conflict of interest.</li>
                            </ul>
                        </div>

                        {/* Independence of Research */}
                        <div style={{ marginBottom: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Independence of Research</h2>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li><strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, and his associates are not affiliated with any other intermediaries and have not received any brokerage or commission from third parties.</li>
                                <li><strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, and his associates have not received any compensation from the Company covered under research during the past twelve months.</li>
                                <li><strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, and his associates have not managed or co-managed any public offering of securities of the Company in the past twelve months.</li>
                                <li><strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, and his associates have not served as an officer, director, or employee of the Company and have not been engaged in the market-making activity of the Company.</li>
                            </ul>
                        </div>

                        {/* Responsibility & Advice */}
                        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                            <h2 className="section-title-small" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Responsibility & Advice to Investors</h2>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li>The facts mentioned in research reports issued by <strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, are obtained from reliable sources. However, investors are strongly advised to independently evaluate the market conditions and risks before making any investment decisions.</li>
                                <li><strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, may also use Artificial Intelligence tools in providing research services.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StandardDisclosures;
