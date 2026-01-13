import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import './Project.css';

const PricingSection = () => {
    const plans = [
        {
            name: "Quarterly",
            price: "₹15,000",
            duration: "3 Months",
            features: [
                "4-5 Stock Ideas",
                "Detailed Research Reports",
                "Buy & Sell Alerts",
                "Market Updates & Insights"
            ]
        },
        {
            name: "Half-Yearly",
            price: "₹25,000",
            duration: "6 Months",
            features: [
                "8-10 Stock Ideas",
                "Detailed Research Reports",
                "Buy & Sell Alerts",
                "Market Updates & Insights"
            ]
        },
        {
            name: "Annual",
            price: "₹45,000",
            duration: "Yearly",
            features: [
                "15-20 Stock Ideas",
                "Detailed Research Reports",
                "Buy & Sell Alerts",
                "Market Updates & Insights"
            ]
        }
    ];

    return (
        <Section
            id="pricing"
            background="light"
            className="pricing-section"
        >
            <Reveal direction="up">
                <div className="section-header align-center">
                    <h2 className="section-title">Your Gateway to Proven Market Mastery</h2>
                    <p className="section-subtitle">Elevate Your Investment Game with Our Exclusive Annual Plan – Tailored for Serious Traders Seeking Consistent, Data-Driven Success.</p>
                </div>
            </Reveal>

            <div className="pricing-slider-container">
                <div
                    className="pricing-grid-v2"
                    style={{ justifyContent: plans.length <= 2 ? 'center' : 'flex-start' }}
                >
                    {plans.map((plan, index) => (
                        <Reveal key={index} direction="up" delay={index + 1}>
                            <div className="pricing-card-v2">
                                <div className="pricing-card-header-v2">
                                    <div className="exclusive-badge">{plan.name} PLAN</div>
                                    <div className="pricing-price-v2">{plan.price}<span>/{plan.duration}</span></div>
                                </div>

                                <div className="pricing-divider"></div>

                                <ul className="pricing-features-v2">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex}>
                                            <div className="feature-icon">✓</div>
                                            <div className="feature-text">
                                                <strong>{feature}</strong>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pricing-medium">
                                    <span>Medium:</span> All updates delivered via Email and WhatsApp.
                                </div>

                                <Button
                                    variant="primary"
                                    fullWidth
                                    className="pricing-btn-v2"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    GET STARTED NOW
                                </Button>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default PricingSection;
