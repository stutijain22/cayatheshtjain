import React from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import './Project.css';

const TestimonialsPage = () => {
    // Array of 5 testimonials
    const baseTestimonials = [
        { id: 1, img: '/t1.png' },
        { id: 2, img: '/t2.png' },
        { id: 3, img: '/t3.png' },
        { id: 4, img: '/t4.png' },
        { id: 5, img: '/t5.png' },
    ];

    // Duplicate 3 times to ensure zero gaps on ultra-wide screens
    const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

    return (
        <Section
            id="testimonials"
            background="light"
            className="testimonials-section-wrapper"
        >
            <Reveal direction="up">
                <div className="section-header align-center">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">Real feedback from real traders</p>
                </div>
            </Reveal>

            <Reveal direction="up" delay={1}>
                <div className="testimonials-slider-container">
                    <div className="testimonials-track">
                        {testimonials.map((t, index) => (
                            <div key={index} className="testimonial-card">
                                <img src={t.img} alt={`Testimonial ${t.id}`} className="testimonial-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </Section>
    );
};

export default TestimonialsPage;
