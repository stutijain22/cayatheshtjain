import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './Project.css';
import Button from '../components/Button';
import { useToast } from '../components/ToastContext';

const SignupPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const { showToast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating manual signup success
        const mockUser = {
            name: name || email.split('@')[0],
            email: email,
            manual: true
        };
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('isAuthenticated', 'true');
        showToast('Account created successfully!');
        navigate('/');
    };

    const handleGoogleSuccess = (response) => {
        try {
            const userInfo = jwtDecode(response.credential);

            // Store user data
            localStorage.setItem('user', JSON.stringify(userInfo));
            localStorage.setItem('isAuthenticated', 'true');

            showToast(`Welcome ${userInfo.name}! Account created.`);

            // Redirect to home
            navigate('/');
        } catch (error) {
            console.error('Signup failed:', error);
            showToast('Signup failed. Please try again.', 'error');
        }
    };

    const handleGoogleError = () => {
        showToast('Google Signup Failed', 'error');
    };

    return (
        <div className="auth-page">


            <div className="auth-container">
                <div className="auth-card">

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <h2 className="auth-title">Create Account</h2>
                        <p className="auth-subtitle">Join us to start your investment journey</p>

                        <div className="form-group">
                            <label htmlFor="signup-name">Full Name</label>
                            <input
                                type="text"
                                id="signup-name"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="signup-email">Email Address</label>
                            <input
                                type="email"
                                id="signup-email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                        <div className="auth-divider">
                            <span>OR</span>
                        </div>

                        {/* Google Signup Component */}
                        <div className="google-login-wrapper">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleError}
                                theme="outline"
                                size="large"
                                text="signup_with"
                                shape="pill"
                                use_fedcm_for_prompt={true}
                            />
                        </div>

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
