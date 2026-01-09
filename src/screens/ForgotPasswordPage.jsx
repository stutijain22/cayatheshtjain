import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import Button from '../components/Button';

const ForgotPasswordPage = () => {
    return (
        <div className="auth-page">


            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-logo">
                        <img src="/webLogo.jpg" alt="Logo" />
                        <h3>Yathesht Jain</h3>
                    </div>

                    <form className="auth-form">
                        <h2 className="auth-title">Reset Password</h2>
                        <p className="auth-subtitle">Enter your email to receive reset instructions</p>

                        <div className="form-group">
                            <label htmlFor="forgot-email">Email Address</label>
                            <input
                                type="email"
                                id="forgot-email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <Button variant="primary" fullWidth type="submit">
                            Send Reset Link
                        </Button>

                        <p className="auth-footer-text">
                            Remember your password? <Link to="/auth" className="auth-link">Back to Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
