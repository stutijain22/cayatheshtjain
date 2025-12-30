import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './Project.css';
import Button from '../components/Button';

const LoginPage = () => {
    const handleGoogleSuccess = (response) => {
        const userInfo = jwtDecode(response.credential);
        console.log('User Info:', userInfo);
        alert(`Welcome ${userInfo.name}! Email: ${userInfo.email}`);
        // Yahan backend API call kar sakte ho
    };

    const handleGoogleError = () => {
        alert('Google Login Failed');
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
                        <h2 className="auth-title">Welcome Back</h2>
                        <p className="auth-subtitle">Login to access your account</p>

                        {/* Google Login Component */}
                        <div className="google-login-wrapper">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleError}
                                useOneTap
                                theme="outline"
                                size="large"
                                text="continue_with"
                                shape="rectangular"
                            />
                        </div>

                        <div className="auth-divider">
                            <span>OR</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="login-email">Email Address</label>
                            <input
                                type="email"
                                id="login-email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="login-password">Password</label>
                            <input
                                type="password"
                                id="login-password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <Link to="/forgot-password" className="forgot-link">
                            Forgot Password?
                        </Link>

                        <Button variant="primary" fullWidth type="submit">
                            Login
                        </Button>

                        <p className="auth-footer-text">
                            Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
