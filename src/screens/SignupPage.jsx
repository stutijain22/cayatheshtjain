import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './Project.css';
import Button from '../components/Button';

const SignupPage = () => {
    const handleGoogleSuccess = (response) => {
        const userInfo = jwtDecode(response.credential);
        console.log('User Info:', userInfo);
        alert(`Welcome ${userInfo.name}! Account created with: ${userInfo.email}`);
        // Backend API call for signup
    };

    const handleGoogleError = () => {
        alert('Google Signup Failed');
    };

    return (
        <div className="auth-page">
            <Link to="/" className="back-to-home">
                ← Back to Home
            </Link>

            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-logo">
                        <img src="/webLogo.jpg" alt="Logo" />
                        <h3>Yathesht Jain</h3>
                    </div>

                    <form className="auth-form">
                        <h2 className="auth-title">Create Account</h2>
                        <p className="auth-subtitle">Join us to start your investment journey</p>

                        {/* Google Signup Component */}
                        <div className="google-login-wrapper">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleError}
                                theme="outline"
                                size="large"
                                text="signup_with"
                                shape="rectangular"
                            />
                        </div>

                        <div className="auth-divider">
                            <span>OR</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="signup-name">Full Name</label>
                            <input
                                type="text"
                                id="signup-name"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="signup-email">Email Address</label>
                            <input
                                type="email"
                                id="signup-email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="signup-phone">Phone Number</label>
                            <input
                                type="tel"
                                id="signup-phone"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="signup-password">Password</label>
                            <input
                                type="password"
                                id="signup-password"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="signup-confirm">Confirm Password</label>
                            <input
                                type="password"
                                id="signup-confirm"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <Button variant="primary" fullWidth type="submit">
                            Sign Up
                        </Button>

                        <p className="auth-footer-text">
                            Already have an account? <Link to="/auth" className="auth-link">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
