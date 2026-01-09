import React from 'react';
import '../Project.css';

const MITC = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <div className="rra-header">
                    <h1 className="rra-title">Most Important Terms & Conditions</h1>
                    <p className="rra-subtitle">Key terms for our research services</p>
                </div>

                {/* Main Content Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>

                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong>Yathesht Jain</strong> (“Research Analyst”) is registered with the Securities and Exchange Board of India (SEBI) as a Research Analyst under Registration No. <strong>INH000022844</strong>.
                        </p>

                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li>The terms and conditions and the consent thereon are for the research services provided by the Research Analyst (RA). The RA cannot execute or carry out any trade (purchase/sell transaction) on behalf of the client. Clients are advised not to permit the RA to execute any trade on their behalf.</li>

                            <li>The fee charged by the RA to the client will be subject to the maximum amount prescribed by SEBI / Research Analyst Administration and Supervisory Body (RAASB) from time to time (applicable only for Individual and HUF Clients).</li>

                            <li style={{ listStyle: 'none', paddingLeft: '0' }}>
                                <div style={{ background: 'rgba(82, 171, 152, 0.05)', padding: '1rem 1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
                                    <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Note:</p>
                                    <ul style={{ listStyle: 'circle', paddingLeft: '1.2rem' }}>
                                        <li>The current fee limit is <strong>Rs 1,51,000/-</strong> per annum per family of client for all research services of the RA.</li>
                                        <li>The fee limit does not include statutory charges.</li>
                                        <li>The fee limits do not apply to a non-individual client / accredited investor.</li>
                                    </ul>
                                </div>
                            </li>

                            <li>The RA may charge fees in advance if agreed by the client. Such advance shall not exceed the period stipulated by SEBI; presently it is one year. In case of pre-mature termination of the RA services by either the client or the RA, the client shall be entitled to seek refund of proportionate fees only for the unexpired period.</li>

                            <li>Fees to the RA may be paid by the client through any of the specified modes like cheque, online bank transfer, UPI, etc. <strong>Cash payment is not allowed</strong>. Optionally, the client can make payments through Centralized Fee Collection Mechanism (CeFCoM) managed by BSE Limited (i.e. currently recognized RAASB).</li>

                            <li>The RA is required to abide by the applicable regulations/ circulars/ directions specified by SEBI and RAASB from time to time in relation to disclosure and mitigation of any actual or potential conflict of interest. The RA will endeavor to promptly inform the client of any conflict of interest that may affect the services being rendered to the client.</li>

                            <li>Any assured/guaranteed/fixed returns schemes or any other schemes of similar nature are prohibited by law. No scheme of this nature shall be offered to the client by the RA.</li>

                            <li>The RA cannot guarantee returns, profits, accuracy, or risk-free investments from the use of the RA’s research services. All opinions, projections, and estimates of the RA are based on the analysis of available data under certain assumptions as of the date of preparation/publication of the research report.</li>

                            <li>Any investment made based on recommendations in research reports is subject to market risks, and recommendations do not provide any assurance of returns. There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report. Any reliance placed on the research report provided by the RA shall be as per the client’s own judgement and assessment of the conclusions contained in the report.</li>

                            <li>The SEBI registration, enlistment with RAASB, and NISM certification do not guarantee the performance of the RA or assure any returns to the client.</li>
                        </ul>

                        <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '1.2rem' }}>Grievance Redressal Mechanism</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <p><strong>Step 1:</strong> For any support-related grievances, including issues related to non-receipt of reports or deficiencies in service, clients must email their concerns to <strong>cayathesht@gmail.com</strong>. If unresolved, grievances must be escalated to the designated grievance officer.</p>

                                <div style={{ background: 'rgba(43, 103, 119, 0.03)', padding: '1.2rem', borderRadius: '12px' }}>
                                    <p><strong>Compliance Officer:</strong> Yathesht Jain (<a href="mailto:cayathesht@gmail.com" style={{ color: 'var(--secondary)' }}>cayathesht@gmail.com</a>)</p>
                                    <p><strong>Contact No.:</strong> +91 9636950969</p>
                                </div>

                                <p><strong>Step 2:</strong> If the resolution is unsatisfactory, the client can also lodge grievances through SEBI’s SCORES platform at <a href="http://www.scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>www.scores.sebi.gov.in</a></p>

                                <p><strong>Step 3:</strong> The client may also consider the Online Dispute Resolution (ODR) through the Smart ODR portal at <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>https://smartodr.in</a></p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                            <p style={{ marginBottom: '1rem' }}>Clients are required to keep their contact details, including email ID and mobile number, updated with the RA at all times.</p>
                            <p style={{ color: '#d9534f', fontWeight: '600' }}>The RA shall never ask for the client’s login credentials or OTPs for their Trading Account, Demat Account, or Bank Account. Clients must never share such information with anyone, including the RA.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MITC;
