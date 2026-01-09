import React from 'react';
import '../Project.css';

const GrievanceRedressal = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <div className="rra-header">
                    <h1 className="rra-title">Grievance Redressal</h1>
                    <p className="rra-subtitle">Our commitment to resolving your concerns effectively</p>
                </div>

                {/* Main Content Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>

                        <p style={{ marginBottom: '1.5rem', fontWeight: '600' }}>
                            Here are the steps a client can follow in case of grievance or feedback:
                        </p>

                        <p style={{ marginBottom: '1rem' }}>
                            If you are not satisfied with our services and would like to lodge a complaint, we would request you to first talk to our representative / consultant from the Research Analyst Department who is your point of contact. You can discuss with him, and be rest assured that your complaint will be resolved on best efforts within 7 business working days of the receipt of grievance.
                        </p>

                        <p style={{ marginBottom: '1rem' }}>
                            You can also email or talk to the representative / consultant via telephone. The contact no. is <strong>9636950969</strong>. Alternatively, you can send us a complaint in writing or via email on <strong>cayathesht@gmail.com</strong>.
                        </p>

                        <p style={{ marginBottom: '1rem' }}>
                            Please contact Compliance Officer of the research analyst:
                            <br />
                            <strong>Name:</strong> Yathesht Jain
                            <br />
                            <strong>Address:</strong> Barkat Nagar, Jaipur, Rajasthan - 302020, India
                            <br />
                            <strong>E-mail ID:</strong> <a href="mailto:cayathesht@gmail.com" style={{ color: 'var(--secondary)' }}>cayathesht@gmail.com</a>
                            <br />
                            <strong>Phone No.:</strong> +91 9636950969
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            We will try to resolve your complaint within 21 days of the receipt of grievance. The first step is for us to be clear about the nature of your complaint, and to identify what we can do to resolve the issue. When we have finished our investigations into your complaint, we will be in touch to provide you with a full response to your complaint.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            If you are still not satisfied with the response or the handling of your complaint by our representative / consultant, you can approach and write an email to <strong>Yathesht Jain</strong>, Principal Officer at <strong>cayathesht@gmail.com</strong> with complete details. <strong>Yathesht Jain</strong>, Proprietor of <strong>Yathesht Jain</strong>, will get in touch with you at the earliest and try to resolve your complaint as soon as possible.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            You can also lodge your grievances with SEBI at <a href="http://scores.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>http://scores.gov.in</a> or you may also write to any of the offices of SEBI. For any queries, feedback or assistance, please contact SEBI Office on Toll Free Helpline at <strong>1800 22 7575 / 1800 266 7575</strong>.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            If your complaint is not resolved within a period of one month, you may refer your complaint to the regulator – The Securities and Exchange Board of India (SEBI).
                            <br />
                            <strong>Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB):</strong>
                        </p>

                        <p style={{ marginBottom: '1rem' }}>
                            <strong>SCORES 2.0</strong> (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) (<a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>https://scores.sebi.gov.in</a>)
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong>Two level review for complaint/grievance against Research Analyst:</strong>
                            <br />
                            1. First review done by designated body (RAASB)
                            <br />
                            2. Second review done by SEBI
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on <strong>SMARTODR</strong> platform for its resolution through online conciliation or arbitration. The link for the platform is <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>https://smartodr.in/login</a>
                        </p>

                        <div style={{ background: 'rgba(43, 103, 119, 0.03)', padding: '1.5rem', borderRadius: '12px', marginTop: '1rem' }}>
                            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>With regard to physical complaints, investors may send their complaints to:</p>
                            <address style={{ fontStyle: 'normal', lineHeight: '1.6' }}>
                                Office of Investor Assistance and Education,<br />
                                Securities and Exchange Board of India,<br />
                                SEBI Bhavan, Plot No. C4-A, ‘G’ Block,<br />
                                Bandra-Kurla Complex, Bandra (E),<br />
                                Mumbai – 400 051.
                            </address>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrievanceRedressal;
