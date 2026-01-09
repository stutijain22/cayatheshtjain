import React from 'react';
import '../Project.css';

const TermsOfUse = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <div className="rra-header">
                    <h1 className="rra-title">Terms of Use</h1>
                    <p className="rra-subtitle">Governing your access and use of our platform</p>
                </div>

                {/* Main Content Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>

                        <p style={{ marginBottom: '1.5rem' }}>
                            This Policy outlines <strong>Yathesht Jain</strong> (hereafter “Yathesht Jain”, “we”, “us”, or “our”) practices in relation to the storage, use, processing, and disclosure of personal data that you have chosen to share with us when you access our website, value-added services, research reports, and related offerings (hereafter “Services”) on or through our technology platforms, including but not limited to this website (collectively “Platform”).
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Welcome to <strong>Yathesht Jain</strong>! These Terms of Use govern your use of our website located at <a href="https://cayathesht.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>https://cayathesht.com/</a>. By accessing or using our website, you agree to comply with these Terms of Use. This policy is effective from <strong>21 August 2025</strong>.
                        </p>

                        {/* Sections */}
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>Intellectual Property</h2>
                            <p>
                                All content on our website, including but not limited to text, graphics, logos, images, audio clips, video clips, research reports, and software, is the property of <strong>Yathesht Jain</strong> or its licensors and is protected by applicable intellectual property laws. You may not use, reproduce, distribute, modify, or create derivative works of any content without our prior written consent.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>User Conduct</h2>
                            <p style={{ marginBottom: '0.5rem' }}>When using our website, you agree to:</p>
                            <ul style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
                                <li>Comply with all applicable laws and regulations.</li>
                                <li>Use our website only for lawful purposes and in a manner that does not infringe or violate the rights of others.</li>
                                <li>Not engage in any activity that could damage, disable, overburden, or impair our website or interfere with any other party’s use and enjoyment of our website.</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>Links to Third-Party Websites</h2>
                            <p>
                                Our website may contain links to third-party websites that are not owned or controlled by <strong>Yathesht Jain</strong>. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. By accessing third-party websites, you do so at your own risk and should review the applicable terms and policies.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>Disclaimer of Warranties</h2>
                            <p>
                                Our website and research services are provided on an “as is” and “as available” basis without any representations or warranties, express or implied. We do not warrant that our website will be error-free, uninterrupted, or free of viruses or other harmful components. Investments in securities markets are subject to market risks, and no assurance of returns is provided.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>Limitation of Liability</h2>
                            <p>
                                To the fullest extent permitted by law, <strong>Yathesht Jain</strong> and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our website and services.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>Access Restriction / Fees</h2>
                            <p>
                                <strong>Yathesht Jain</strong> reserves the right to deny, in its sole discretion, any user access to this website or any portion thereof without notice or justification. Further, we reserve the right at any time to charge fees for access to any services provided by us.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>Limits on Personal Use</h2>
                            <p>
                                The client expressly agrees to use the service strictly for personal purposes. The user shall not copy, modify, distribute, transmit, or publish any information accessed from this website. By viewing the contents of this website, you agree with this condition of use and acknowledge that any unauthorized use is unlawful and may be subject to criminal or civil penalties.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>Changes to Terms of Use</h2>
                            <p>
                                We reserve the right to update or modify these Terms of Use at any time without prior notice. Your continued use of our website after any changes indicates your acceptance of the updated Terms of Use.
                            </p>
                        </div>

                        {/* Contact Us */}
                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Contact Us</h2>
                            <p style={{ marginBottom: '0.5rem' }}>If you have any questions or concerns about these Terms of Use, please contact us:</p>
                            <div style={{ marginTop: '1rem' }}>
                                <p><strong>Email:</strong> <a href="mailto:cayathesht@gmail.com" style={{ color: 'var(--secondary)' }}>cayathesht@gmail.com</a></p>
                                <p><strong>Phone:</strong> +91 9636950969</p>
                                <p><strong>Address:</strong> Barkat Nagar, Jaipur, Rajasthan - 302020, India</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
