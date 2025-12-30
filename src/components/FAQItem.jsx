import React, { useState } from 'react';


const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={onToggle}>
                <span className="question-text">{question}</span>
                <svg
                    className={`faq-icon ${isOpen ? 'rotate' : ''}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        d="M7.5 5L12.5 10L7.5 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
                <div className="answer-content">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
