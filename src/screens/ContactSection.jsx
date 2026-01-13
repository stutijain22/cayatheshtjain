import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../components/Section';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import './Project.css';

const ContactSection = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error', 'validation_error'
    const [errorMessage, setErrorMessage] = useState('');
    const [phone, setPhone] = useState('');

    // emailjs.init call removed as public key is now passed in send()

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Only digits
        if (value.length <= 10) {
            setPhone(value);
        }
    };

    const validateForm = () => {
        const formData = new FormData(form.current);
        const email = formData.get('email');
        const phone = formData.get('phone');

        // Email Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return false;
        }

        // Phone Validation (exactly 10 digits)
        if (phone.length !== 10) {
            setErrorMessage('Phone number must be exactly 10 digits.');
            return false;
        }

        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!validateForm()) {
            setStatus('validation_error');
            return;
        }

        const formData = new FormData(form.current);
        const templateParams = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        console.log("Sending with params:", templateParams);
        setStatus('sending');

        emailjs.send(
            'service_z1g6456',
            'template_l1gckjg',
            templateParams,
            'AnM5sj00QeqPwWPps'
        )
            .then(
                (result) => {
                    console.log('EmailJS Success Status:', result.status, result.text);
                    setStatus('success');
                    setPhone('');
                    form.current.reset();
                    setTimeout(() => setStatus(''), 5000);
                },
                (error) => {
                    console.error('EmailJS Error Message:', error.text || error);
                    setStatus('error');
                    setTimeout(() => setStatus(''), 5000);
                },
            );
    };

    return (
        <section className="contact-section-v2" id="contact">
            <div className="contact-video-overlay">
                <video
                    src="/pigeon.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                />
                <div className="dark-overlay"></div>
            </div>

            <div className="container">
                <div className="contact-content-v2">
                    <Reveal direction="up">
                        <div className="contact-header-v2">
                            <h2 className="gradient-title-v2">Get In Touch</h2>
                        </div>
                    </Reveal>

                    <Reveal direction="up" delay={1}>
                        <div className="contact-form-glass-card">
                            <form ref={form} className="contact-form-v2" onSubmit={sendEmail}>
                                <div className="form-grid-v2">
                                    <div className="input-container-v2">
                                        <input type="text" name="name" placeholder="Full Name" className="frosted-input-v2" required />
                                        <svg className="input-icon-v2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    </div>

                                    <div className="input-container-v2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="10-Digit Phone Number"
                                            className="frosted-input-v2"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            required
                                        />
                                        <svg className="input-icon-v2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>

                                    <div className="input-container-v2 full-width">
                                        <input type="email" name="email" placeholder="Email Address" className="frosted-input-v2" required />
                                        <svg className="input-icon-v2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>

                                    <div className="input-container-v2 full-width">
                                        <textarea name="message" placeholder="How can we help you?" className="frosted-input-v2" required></textarea>
                                        <svg className="input-icon-v2" style={{ top: '1.5rem', transform: 'none' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                </div>

                                <Button
                                    variant="primary"
                                    fullWidth
                                    type="submit"
                                    className=""
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Processing...' : 'Send Message'}
                                </Button>

                                <div className="form-footer-v2">
                                    <p className="footer-text-v2">We'll get back to you within 24 hours.</p>
                                </div>

                                {status === 'success' && (
                                    <div className="status-alert success">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        <span>Message dispatched successfully!</span>
                                    </div>
                                )}
                                {(status === 'error' || status === 'validation_error') && (
                                    <div className="status-alert error">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="20"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                        <span>{errorMessage || 'Oops! Something went wrong.'}</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
