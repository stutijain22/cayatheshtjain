import React from 'react';
import Reveal from '../components/Reveal';
import './Project.css';

const KnowYourRA = () => {
    return (
        <div className="page2-section" id="know-your-ra">
            <div className="page2-container">
                <div className="page2-card">
                    <div className="page2-layout">
                        <Reveal direction="left" className="page2-content-column">
                            <h2 className="page2-title">Embark on a Journey Toward Trading Proficiency</h2>
                            <div className="page2-info">
                                {[
                                    `I am Yathesht Jain, a SEBI-certified Research Analyst, and I sincerely appreciate your visit to this platform. The content shared here is intended primarily for educational and informational purposes and should not be construed as personalized investment advice or a solicitation to buy or sell any securities.`,
                                    `This platform is designed to share structured knowledge, market insights, and practical understanding developed through extensive experience in the stock markets, with the aim of helping individuals cultivate a disciplined, informed, and responsible approach to trading and investing.`,
                                    `Empowering traders through knowledge, discipline, and continuous learning.`
                                ].map((text, index) => (
                                    <p key={index} className={`page2-text ${index === 2 ? 'highlight' : ''}`}>
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal direction="right" className="page2-image-column">
                            <div className="image-wrapper">
                                <img src="/profile.jpg" alt="Yathesht Jain" className="profile-img" />
                                <div className="image-decoration"></div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowYourRA;
