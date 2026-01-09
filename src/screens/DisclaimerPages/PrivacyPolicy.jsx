import React from 'react';
import '../Project.css';

const PrivacyPolicy = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <div className="rra-header">
                    <h1 className="rra-title">Privacy Policy</h1>
                    <p className="rra-subtitle">Protecting your personal data with integrity</p>
                </div>

                {/* Content Box */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            This Policy outlines <strong>Yathesht Jain</strong> (hereafter “Yathesht Jain”, “we”, “us”, or “our”) practices in relation to the storage, use, processing, and disclosure of personal data that you have chosen to share with us when you access our website, value-added services, research reports, or related offerings (hereafter “Services”) on or through our technology platforms, including but not limited to this website (collectively “Platform”).
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            At Yathesht Jain, we are committed to protecting the privacy and confidentiality of your personal information. This Privacy Policy explains how we collect, use, and disclose the personal information you provide to us when using our website. This policy is effective from <strong>21st August 2025</strong>.
                        </p>

                        <h2 className="section-title-small" style={{ color: 'var(--primary)', marginTop: '2rem' }}>Collection of Information</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            When you visit our website at <a href="https://cayathesht.com/" style={{ color: 'var(--secondary)' }}>https://cayathesht.com/</a>, we may collect certain information automatically, including your IP address, browser type, operating system, and referring website URLs. We may also collect information about your usage patterns and preferences on our website.
                        </p>

                        <h2 className="section-title-small" style={{ color: 'var(--primary)', marginTop: '2rem' }}>Use of Information</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            We use the collected information to improve our website and enhance your user experience. We may also use your personal information to communicate with you, provide you with updates and information about our services, and respond to your inquiries or requests.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We will not use, trade, or share your personal information with a third party for marketing purposes. To the extent required or permitted by law, we may also collect, use, and disclose personal information in connection with security-related or law enforcement investigations, in the course of cooperating with authorities, or for complying with legal requirements.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontStyle: 'italic' }}>
                            Yathesht Jain reserves the right to edit, remove, or add any information at any time at its sole discretion.
                        </p>

                        <h3 style={{ color: 'var(--secondary)', marginTop: '1.5rem', marginBottom: '1rem' }}>Subscription or paid services data:</h3>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>When you choose any of our services, we or our payment gateway provider may collect your purchase, address, or billing information, including your credit card number and expiration date.</li>
                            <li>We may also collect your KYC documents as required by SEBI regulations and store them in digital and non-digital formats.</li>
                        </ul>

                        <h2 className="section-title-small" style={{ color: 'var(--primary)', marginTop: '2rem' }}>Limited Liability</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Our Services may, from time to time, contain services provided by or links to and from the websites of our partner networks, advertisers, and affiliates (“Third-Party Services”). Please note that these Third-Party Services have their own privacy policies. We do not accept any responsibility or liability for such policies or for any personal data collected by Third-Party Services.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We do not take liability beyond the payment you have made for the services. You are fully responsible for sharing only required information on a need-to-know basis. There is no guarantee or warranty of returns based on SEBI guidelines. Investments in securities markets are subject to market risks.
                        </p>

                        <h2 className="section-title-small" style={{ color: 'var(--primary)', marginTop: '2rem' }}>Disclosure of Information</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We do not sell or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or providing services to you. These third parties are obligated to keep your information confidential.
                        </p>

                        <h2 className="section-title-small" style={{ color: 'var(--primary)', marginTop: '2rem' }}>Security</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We take reasonable measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is completely secure.
                        </p>

                        <h2 className="section-title-small" style={{ color: 'var(--primary)', marginTop: '2rem' }}>Changes to Privacy Policy</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting the revised policy on our website.
                        </p>

                        <div className="contact-info-block" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(43, 103, 119, 0.1)' }}>
                            <h2 style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontSize: '1.4rem' }}>Contact Us</h2>
                            <p style={{ marginBottom: '0.8rem' }}><strong>Email:</strong> <a href="mailto:cayathesht@gmail.com" style={{ color: 'var(--secondary)' }}>cayathesht@gmail.com</a></p>
                            <p style={{ marginBottom: '0.8rem' }}><strong>Phone:</strong> <a href="tel:+919636950969" style={{ color: 'var(--secondary)' }}>+91 9636950969</a></p>
                            <p><strong>Address:</strong> Barkat Nagar, Jaipur, Rajasthan - 302020, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
