import React from 'react';
import Reveal from '../../components/Reveal';
import '../Project.css';

const Refund = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <Reveal direction="up" className="disclaimer-reveal">
                    <div className="rra-header">
                        <h1 className="rra-title">Refund Policy</h1>
                        <p className="rra-subtitle">Our policy regarding subscriptions and cancellations</p>
                    </div>
                </Reveal>

                {/* Main Content Card */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left', lineHeight: '1.8' }}>

                        <Reveal direction="up" delay={0.2} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem' }}>
                                At <strong>Yathesht Jain</strong>, we take great care to provide our clients with accurate, research-driven, and valuable insights. Due to the digital and consumable nature of our services, all sales are considered final and non-refundable once the subscription has been activated.
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.4} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem' }}>
                                If you have any refund-related queries or concerns, you may reach out to us at <a href="mailto:cayathesht@gmail.com" style={{ color: 'var(--secondary)' }}>cayathesht@gmail.com</a>. We will review your request in line with SEBI guidelines and our internal policies.
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.6} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem' }}>
                                You may cancel your subscription at any time, and we will ensure that no future renewals are processed from our end. Please note that cancellation of services will not result in a refund for the current subscription period.
                            </p>
                        </Reveal>

                        <Reveal direction="up" delay={0.8} className="disclaimer-reveal">
                            <p style={{ marginBottom: '1.5rem', fontWeight: '500' }}>
                                We strongly encourage all prospective clients to carefully review our service details, terms, and risk disclosures before making a purchase decision.
                            </p>
                        </Reveal>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Refund;
