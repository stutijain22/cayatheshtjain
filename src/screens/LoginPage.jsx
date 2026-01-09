import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './Project.css';
import Button from '../components/Button';
import { useToast } from '../components/ToastContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const { showToast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating manual login success
        const mockUser = {
            name: email.split('@')[0], // Use email prefix as name
            email: email,
            manual: true
        };
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('isAuthenticated', 'true');
        showToast(`Welcome back, ${mockUser.name}!`);
        navigate('/');
    };

    const handleGoogleSuccess = (response) => {
        try {
            const userInfo = jwtDecode(response.credential);
            console.log('User Info:', userInfo);

            // Store user data in localStorage to persist login state
            localStorage.setItem('user', JSON.stringify(userInfo));
            localStorage.setItem('isAuthenticated', 'true');

            showToast(`Welcome back, ${userInfo.name}!`);

            // Redirect to home page
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            showToast('Login failed. Please try again.', 'error');
        }
    };

    const handleGoogleError = () => {
        showToast('Google Login Failed', 'error');
    };

    return (
        <div className="auth-page">


            <div className="auth-container">
                <div className="auth-card">

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <h2 className="auth-title">Welcome Back</h2>
                        <p className="auth-subtitle">Login to access your account</p>

                        <div className="form-group">
                            <label htmlFor="login-email">Email Address</label>
                            <input
                                type="email"
                                id="login-email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                        <div className="auth-divider">
                            <span>OR</span>
                        </div>

                        {/* Google Login Component */}
                        <div className="google-login-wrapper">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleError}
                                theme="outline"
                                size="large"
                                text="continue_with"
                                shape="pill"
                                use_fedcm_for_prompt={true}
                            />
                        </div>

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
