import React from 'react';
import Reveal from '../../components/Reveal';
import '../Project.css';

const GrievanceRedressal = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <Reveal direction="up" className="disclaimer-reveal">
                    <div className="rra-header">
                        <h1 className="rra-title">Grievance Redressal</h1>
                        <p className="rra-subtitle">Our commitment to resolving your concerns effectively</p>
                    </div>
                </Reveal>

                {/* Main Content Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>

                        <Reveal direction="up" delay={0.2} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem', fontWeight: '600' }}>
                                Here are the steps a client can follow in case of grievance or feedback:
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.4} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1rem' }}>
                                If you are not satisfied with our services and would like to lodge a complaint, we would request you to first talk to our representative / consultant from the Research Analyst Department who is your point of contact. You can discuss with him, and be rest assured that your complaint will be resolved on best efforts within 7 business working days of the receipt of grievance.
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.6} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1rem' }}>
                                You can also email or talk to the representative / consultant via telephone. The contact no. is <strong>9636950969</strong>. Alternatively, you can send us a complaint in writing or via email on <strong>cayathesht@gmail.com</strong>.
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.8} className="disclaimer-reveal">
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
                        </Reveal>

                        <Reveal direction="up" delay={1.0} className="disclaimer-reveal">
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
                        </Reveal>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrievanceRedressal;
