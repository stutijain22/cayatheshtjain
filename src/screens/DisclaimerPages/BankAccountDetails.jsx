import React from 'react';
import { Link } from 'react-router-dom';
import '../Project.css';
import '../Project.css';

const BankAccountDetails = () => {
    return (
        <div className="bank-account-page">
            <div className="bank-account-container">


                {/* Header */}
                <div className="bank-account-header">
                    <h1 className="bank-account-title">Bank Account Details</h1>
                    <p className="bank-account-subtitle">For Direct Bank Transfers</p>
                </div>

                {/* Main Content Grid */}
                <div className="bank-account-grid">
                    {/* Bank Details Card */}
                    <div className="bank-details-card">
                        <div className="bank-card-header">
                            <div className="bank-icon">🏦</div>
                            <h2>Account Information</h2>
                        </div>

                        <div className="bank-details-list">
                            <div className="bank-detail-item">
                                <span className="detail-label">Bank Name</span>
                                <span className="detail-value">HDFC BANK</span>
                            </div>
                            <div className="bank-detail-divider"></div>

                            <div className="bank-detail-item">
                                <span className="detail-label">Account Number</span>
                                <span className="detail-value">3747234723</span>
                            </div>
                            <div className="bank-detail-divider"></div>

                            <div className="bank-detail-item">
                                <span className="detail-label">Account Name</span>
                                <span className="detail-value">Yathesht Jain</span>
                            </div>
                            <div className="bank-detail-divider"></div>

                            <div className="bank-detail-item">
                                <span className="detail-label">IFSC Code</span>
                                <span className="detail-value">HHHHHHH2W32</span>
                            </div>
                            <div className="bank-detail-divider"></div>

                            <div className="bank-detail-item">
                                <span className="detail-label">Account Type</span>
                                <span className="detail-value">CURRENT A/C</span>
                            </div>
                        </div>
                    </div>

                    {/* QR Code Card */}
                    <div className="qr-code-card">
                        <div className="qr-card-header">
                            <h3>Scan to Pay</h3>
                            <p>Use any UPI app to scan</p>
                        </div>
                        <div className="qr-code-wrapper">
                            <img
                                src="/payment-qr.png"
                                alt="Payment QR Code"
                                className="qr-code-image"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="qr-placeholder" style={{ display: 'none' }}>
                                <div className="qr-placeholder-icon">📱</div>
                                <p>QR Code</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bank-notes-section">
                    <div className="note-card important-note">
                        <div className="note-icon">⚠️</div>
                        <div className="note-content">
                            <h3>Important Notice</h3>
                            <p>
                                Direct payments made to the specified bank account without completing the KYC process
                                and agreeing to the Terms & Conditions do not constitute the initiation of a subscription
                                to the research services.
                            </p>
                        </div>
                    </div>

                    <div className="note-card contact-note">
                        <div className="note-icon">📧</div>
                        <div className="note-content">
                            <h3>Before Making Payment</h3>
                            <p>
                                Please contact me at{' '}
                                <a href="mailto:support@yatheshtjain.com" className="email-link">
                                    support@yatheshtjain.com
                                </a>
                                {' '}before making any direct bank transfers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BankAccountDetails;
