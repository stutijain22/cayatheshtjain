import React from 'react';
import Section from '../components/Section';
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
            title="What Our Clients Say"
            subtitle="Real feedback from real traders"
            background="light"
            className="testimonials-section-wrapper"
        >
            <div className="testimonials-slider-container">
                <div className="testimonials-track">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <img src={t.img} alt={`Testimonial ${t.id}`} className="testimonial-img" />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default TestimonialsPage;
