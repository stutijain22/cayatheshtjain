import React from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import './Project.css';

const WhyUs = () => {
    const features = [
        {
            id: 1,
            title: "Mission-Driven Excellence",
            description: "Our goal is to make investing accessible and rewarding for everyone, helping you tap into market growth with strategies rooted in solid research and real-world wisdom.",
            icon: "/targetVideo.mp4"
        },
        {
            id: 2,
            title: "One Refined Strategy",
            description: `We stick to a proven "Double Engine" approach—blending fundamental forensics with technical momentum—honed over years and tested through ups and downs, ensuring reliable results without chasing fads.`,
            icon: "/rocketVideo.mp4"
        },
        {
            id: 3,
            title: "Clarity in Every Step",
            description: "Capital protection is our priority. We emphasize disciplined exit strategies.",
            icon: "/clarityVideo.mp4"
        },
        {
            id: 4,
            title: "Unwavering Values",
            description: "Built on ethics, transparency, and fairness, our service follows strict regulatory standards to provide honest advice you can trust—no hype, just high-integrity guidance.",
            icon: "/unwavingVideo.mp4"
        },
        {
            id: 5,
            title: "Stand Out from the Crowd",
            description: "Unlike others peddling risky shortcuts, we offer structured education, risk-focused tips, and tools that build your independence, setting you up for sustainable wealth creation.",
            icon: "/standVideo.mp4"
        },
        {
            id: 6,
            title: "A Journey of Real Expertise",
            description: "From my roots as a CA mastering financial details to becoming an RA delivering market-beating ideas, my [assume years] years of hands-on experience mean every recommendation comes from lessons learned and successes earned.",
            icon: "/journeyVideo.mp4"
        }
    ];

    return (
        <Section
            id="why-us"
            background="dark"
            className="why-us-section"
        >
            <Reveal direction="up">
                <div className="section-header align-center">
                    <h2 className="section-title">Why Choose Us</h2>
                    <p className="section-subtitle">Distinguishing factors that set us apart in your financial journey</p>
                </div>
            </Reveal>

            <div className="why-us-grid">
                {features.map((feature, index) => (
                    <Reveal
                        key={feature.id}
                        direction="up"
                        delay={(index % 3) + 1}
                        className="why-us-reveal-wrapper"
                    >
                        <div className="why-us-card">
                            <div className="card-white-circle">
                                <div className="card-icon-wrapper">
                                    {feature.icon.endsWith('.mp4') ? (
                                        <video
                                            src={feature.icon}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="card-icon-video"
                                        />
                                    ) : (
                                        <span className="card-icon">{feature.icon}</span>
                                    )}
                                </div>
                                <h3 className="card-title">{feature.title}</h3>
                                <p className="card-description">{feature.description}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

export default WhyUs;
