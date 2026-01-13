import React, { useState } from 'react';
import Section from '../components/Section';
import FAQItem from '../components/FAQItem';
import Reveal from '../components/Reveal';
import './Project.css';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do you provide investment and trading tips?",
            answer: "We deliver tips through our subscription-based platform, focusing on high-conviction equity and swing trading opportunities. Each tip includes detailed analysis, entry/exit levels, stop-loss, and rationale based on technical and fundamental insights. ✅ Tips are shared via email, app notifications, or our members' portal—only when clear setups emerge, prioritizing quality over frequency."
        },
        {
            question: "Is there any guaranteed return on your tips?",
            answer: "❌ No guarantees whatsoever. As a SEBI-registered Research Analyst, we adhere to regulations: All investments involve market risks, and past performance doesn't assure future results. Our tips are for educational purposes to help you make informed decisions—always read disclaimers and consult your financial advisor."
        },
        {
            question: "What makes your tips different from others?",
            answer: 'Backed by my Chartered Accountant expertise and years of market experience, our tips blend forensic fundamental analysis with momentum-based technicals. We avoid hype, penny stocks, or speculative calls, focusing on sustainable growth opportunities in equities and indices. 👉 This "Double Engine" approach aims for compounding wealth with discipline.'
        },
        {
            question: "How often do you send out tips or updates?",
            answer: "We emphasize quality: Tips are issued only during high-probability setups, which could be 2-5 times a month. In between, subscribers get market insights, portfolio reviews, and educational content to stay informed without overtrading."
        },
        {
            question: "Do you offer intraday, F&O, or options trading tips?",
            answer: "❌ No. Our focus is on equity investments and swing trades for medium-term gains. We steer clear of high-risk intraday or derivatives calls to promote responsible trading aligned with long-term wealth building."
        },
        {
            question: "Who is your service best suited for?",
            answer: "Ideal for serious retail investors, active traders seeking structured guidance, and beginners eager to learn while investing. ✅ If you're committed to discipline, education, and long-term growth (not quick riches), our content empowers you to trade independently."
        },
        {
            question: "What support do subscribers get beyond tips?",
            answer: `In-depth educational resources on trading psychology, fundamental analysis, and market trends.
                    Regular Q&A sessions or community forums for doubts.
                    Portfolio tracking tools and performance reviews.
                    Compliance-focused updates to help you navigate regulations confidently.`
        },
        {
            question: "How can I subscribe or get started?",
            answer: `Visit our subscription page to choose a plan—options include monthly, quarterly, or yearly for flexible access. New members get a free trial or introductory webinar to experience our value firsthand.`
        },
        {
            question: "Do you provide personalized advice or portfolio management?",
            answer: `❌ As a Research Analyst, we offer general research and model portfolios, not individualized advisory. For personalized needs, we recommend consulting a registered Investment Adviser. Our goal: Educate you to manage your own investments effectively.`
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="video-container faq-video-container" id="faqs">
            <video className="bg-video" autoPlay muted loop playsInline>
                <source src="/qaVideo.mp4" type="video/mp4" />
            </video>

            <div className="faq-content-wrapper">
                <div className="container">
                    <Reveal direction="up">
                        <div className="section-header align-center">
                            <h2 className="section-title" style={{ color: '#fff' }}>Frequently Asked Questions</h2>
                            <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Find answers to common questions about our services</p>
                        </div>
                    </Reveal>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <Reveal key={index} direction="up" delay={(index % 4) + 1}>
                                <FAQItem
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onToggle={() => handleToggle(index)}
                                />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
