import React from 'react';
import Reveal from '../../components/Reveal';
import '../Project.css';

const GeneralDisclaimer = () => {
    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <Reveal direction="up" className="disclaimer-reveal">
                    <div className="rra-header">
                        <h1 className="rra-title">General Disclaimer</h1>
                        <p className="rra-subtitle">Important Disclosures & Risk Information</p>
                    </div>
                </Reveal>

                {/* Main Content Box */}
                <div className="rra-card primary-card">
                    <div className="rra-address-content" style={{ textAlign: 'left' }}>
                        <Reveal direction="up" delay={0.2} className="disclaimer-reveal">
                            <div className="disclaimer-intro" style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(82, 171, 152, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--secondary)' }}>
                                <p className="rra-address-text" style={{ fontSize: '1.1rem', lineHeight: '1.7', fontWeight: '500' }}>
                                    <strong>CA Yathesht Jain</strong> Proprietor of <strong>Yathesht Jain</strong> is registered with SEBI as Individual Research Analyst vide Registration number <strong>INH000022844</strong> on August 21, 2025 pursuant to which it provides Research Analyst services to its clients.
                                </p>
                            </div>
                        </Reveal>

                        <div className="disclaimer-points" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <Reveal direction="up" delay={0.4} className="disclaimer-reveal">
                                <div className="disclaimer-item" style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>⚠️</span>
                                    <p className="rra-address-text" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                        <strong>Investment in securities market is subject to market risks. Read all the related documents carefully before investing.</strong>
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={0.6} className="disclaimer-reveal">
                                <div className="disclaimer-item" style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>📜</span>
                                    <p className="rra-address-text" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                        Registration granted by SEBI and certification from NISM is no way guarantee performance of the intermediary or provide any assurance of returns to investors.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={0.8} className="disclaimer-reveal">
                                <div className="disclaimer-item" style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>🤝</span>
                                    <p className="rra-address-text" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                        I am not affiliated with any other intermediaries or receive any brokerage or commission from any third party.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={1.0} className="disclaimer-reveal">
                                <div className="disclaimer-item" style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>✅</span>
                                    <p className="rra-address-text" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                        The SEBI has issued no penalties/directions under the SEBI Act or any other regulatory body.
                                    </p>
                                </div>
                            </Reveal>

                            {/* More items can be wrapped if needed, but for very long lists, maybe group them or animate the whole block to avoid stuttering */}
                            <Reveal direction="up" delay={1.2} className="disclaimer-reveal">
                                <div className="disclaimer-item" style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>🚫</span>
                                    <p className="rra-address-text" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                        I do not recommend any stock broker or other intermediary to a client, nor do I receive any consideration by way of remuneration or compensation or in any other form whatsoever from the stock broker or another intermediary.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={1.4} className="disclaimer-reveal">
                                <div className="disclaimer-item" style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>📊</span>
                                    <p className="rra-address-text" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                        Investment in equity shares has its own risks. Sincere efforts have been made to present the right investment perspective. The information contained herein is based on analysis and on sources that I consider reliable. I, however does not vouch for the consistency or the completeness thereof. This material is for personal information and I am not responsible for any loss incurred due to it & take no responsibility whatsoever for any financial profits or loss which may arise from the recommendations above.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={1.6} className="disclaimer-reveal">
                                <div className="disclaimer-item" style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>🔍</span>
                                    <p className="rra-address-text" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                        I do not provide any promise or assurance of favourable view for a particular industry or sector or business group in any manner. The investor is requested to take into consideration all the risk factors including their financial condition and suitability to risk return profile before investing.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal direction="up" delay={1.8} className="disclaimer-reveal">
                            <div className="disclaimer-footer" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                                <p className="rra-address-text" style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                                    Regards,
                                </p>
                                <h3 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '0.2rem' }}>CA Yathesht Jain</h3>
                                <p className="rra-address-text" style={{ fontStyle: 'italic', fontSize: '0.95rem', opacity: 0.8 }}>
                                    (Proprietor of Yathesht Jain)
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralDisclaimer;
