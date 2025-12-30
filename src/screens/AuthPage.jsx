import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import Button from '../components/Button';

const AuthPage = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleGoogleLogin = () => {
        console.log('Google login clicked');
        // Google OAuth will be implemented here
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

                    <div className="auth-tabs">
                        <button
                            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveTab('login')}
                        >
                            Login
                        </button>
                        <button
                            className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
                            onClick={() => setActiveTab('signup')}
                        >
                            Sign Up
                        </button>
                    </div>

                    {activeTab === 'login' && (
                        <form className="auth-form">
                            <h2 className="auth-title">Welcome Back</h2>
                            <p className="auth-subtitle">Login to access your account</p>

                            <button
                                type="button"
                                className="google-login-btn"
                                onClick={handleGoogleLogin}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Continue with Google
                            </button>

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

                            <button
                                type="button"
                                className="forgot-link"
                                onClick={() => setActiveTab('forgot')}
                            >
                                Forgot Password?
                            </button>

                            <Button variant="primary" fullWidth type="submit">
                                Login
                            </Button>
                        </form>
                    )}

                    {activeTab === 'signup' && (
                        <form className="auth-form">
                            <h2 className="auth-title">Create Account</h2>
                            <p className="auth-subtitle">Join us to start your investment journey</p>

                            <button
                                type="button"
                                className="google-login-btn"
                                onClick={handleGoogleLogin}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Sign up with Google
                            </button>

                            <div className="auth-divider">
                                <span>OR</span>
                            </div>

                            <div className="form-group">
                                <label htmlFor="signup-name">Full Name</label>
                                <input type="text" id="signup-name" placeholder="Enter your full name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="signup-email">Email Address</label>
                                <input type="email" id="signup-email" placeholder="Enter your email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="signup-phone">Phone Number</label>
                                <input type="tel" id="signup-phone" placeholder="Enter your phone number" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="signup-password">Password</label>
                                <input type="password" id="signup-password" placeholder="Create a password" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="signup-confirm">Confirm Password</label>
                                <input type="password" id="signup-confirm" placeholder="Confirm your password" required />
                            </div>

                            <Button variant="primary" fullWidth type="submit">
                                Sign Up
                            </Button>
                        </form>
                    )}

                    {activeTab === 'forgot' && (
                        <form className="auth-form">
                            <h2 className="auth-title">Reset Password</h2>
                            <p className="auth-subtitle">Enter your email to receive reset instructions</p>

                            <div className="form-group">
                                <label htmlFor="forgot-email">Email Address</label>
                                <input type="email" id="forgot-email" placeholder="Enter your email" required />
                            </div>

                            <Button variant="primary" fullWidth type="submit">
                                Send Reset Link
                            </Button>

                            <button
                                type="button"
                                className="back-to-login"
                                onClick={() => setActiveTab('login')}
                            >
                                ← Back to Login
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
