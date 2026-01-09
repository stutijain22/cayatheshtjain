import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const getIcon = () => {
        if (type === 'success') {
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            );
        }
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        );
    };

    return (
        <div className={`toast-notification ${type}`}>
            <div className="toast-icon">
                {getIcon()}
            </div>
            <div className="toast-content">
                <p className="toast-message">{message}</p>
            </div>
            <button className="toast-close" onClick={onClose}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div className="toast-progress"></div>
        </div>
    );
};

export default Toast;
