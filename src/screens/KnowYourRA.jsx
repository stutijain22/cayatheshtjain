import React from 'react';
import './Project.css';

const KnowYourRA = () => {
    return (
        <div className="page2-section" id="know-your-ra">
            <div className="page2-container">
                <div className="page2-card">
                    <div className="page2-layout">
                        <div className="page2-content-column">
                            <h2 className="page2-title">Embark on a Journey Toward Trading Proficiency</h2>
                            <div className="page2-info">
                                <p className="page2-text">
                                    I am Yathesht Jain, a SEBI-certified Research Analyst, and
                                    I sincerely appreciate your visit to this platform. The content shared here is
                                    intended primarily for educational and informational purposes and should not be
                                    construed as personalized investment advice or a solicitation to buy or sell any
                                    securities.
                                </p>
                                <p className="page2-text">
                                    This platform is designed to share structured knowledge, market insights,
                                    and practical understanding developed through extensive experience in the stock markets,
                                    with the aim of helping individuals cultivate a disciplined, informed, and responsible
                                    approach to trading and investing.
                                </p>
                                <p className="page2-text highlight">
                                    Empowering traders through knowledge, discipline, and continuous learning.
                                </p>
                            </div>
                        </div>
                        <div className="page2-image-column">
                            <div className="image-wrapper">
                                <img src="/profile.jpg" alt="Yathesht Jain" className="profile-img" />
                                <div className="image-decoration"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowYourRA;
