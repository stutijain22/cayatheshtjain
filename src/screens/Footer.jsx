import React from 'react';
import './Project.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-v4">
            <div className="container">
                {/* Main Row: Branding, Links, Connect */}
                <div className="footer-v4-main">
                    {/* Left: Branding & Contact */}
                    <div className="footer-v4-col branding-col">
                        <div className="footer-logo-brand-group">
                            <div className="footer-logo-container">
                                <img src="/webLogo.jpg" alt="Logo" className="footer-logo" />
                            </div>
                            <div className="footer-brand-text-block">
                                <h1 className="footer-brand-v4">Yathesht Jain</h1>
                                <div className="footer-contact-v4-group">
                                    <div className="footer-contact-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        <a href="mailto:cayathesht@gmail.com">cayathesht@gmail.com</a>
                                    </div>
                                    <div className="footer-contact-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        <a href="tel:+919636950969">+91 9636950969</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle: Signature (To fill space stylishly) */}
                    <div className="footer-v4-col signature-col">
                        <div className="footer-signature">Yathesht Jain</div>
                        <p className="signature-ra-tag">SEBI Research Analyst No. : [Your No.]</p>
                    </div>

                    {/* Right: Social Connect */}
                    <div className="footer-v4-col social-col-v4">
                        <h3 className="social-heading-v4">Connect With Us</h3>
                        <div className="social-pills-v4">
                            <a href="#" className="pill-youtube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                            <a href="#" className="pill-telegram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.441-.168.575-.532 1.139-1.071 1.139-.539 0-.853-.331-1.353-.66l-2.071-1.371-1.001.961c-.131.13-.241.241-.461.241-.221 0-.251-.1-.311-.291l-.811-2.611-2.311-.721c-.481-.151-.491-.481.1-.711l8.811-3.411c.411-.161.771.091.631.631z" /></svg></a>
                            <a href="#" className="pill-instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                            <a href="#" className="pill-x"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
                        </div>
                    </div>
                </div>

                <hr className="footer-v4-hr" />

                <div className="footer-v4-legal">
                    | <a href="#">Terms of Use</a> |
                    <a href="#">Privacy Policy</a> |
                    <a href="#">Investor Charter</a> |
                    <a href="#">Refund Policy</a> |
                    <a href="#">Grievance Redressal</a> |
                    <a href="#">Disclaimer</a> |
                    <a href="#">SMART ODR</a> |
                    <a href="#">SCORES</a> |
                </div>

                <div className="footer-v4-regulatory">
                    <p className="v4-compliance">Compliance officer: Yathesht Jain . Telephone number: +91 9636950969. E-mail address: cayathesht@gmail.com.</p>
                    <p className="v4-disclaimer">
                        Registration granted by SEBI & NISM certification in no way guarantee performance of the intermediary.
                        Investments are subject to market risks. Read all documents carefully.
                    </p>
                    <p className="v4-disclaimer">
                        <strong>SEBI Office Details:</strong> SEBI Bhavan BKC, Plot No.C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (East), Mumbai – 400051, Maharashtra
                    </p>
                    <p className="v4-disclaimer">
                        Investment in securities market are subject to market risks. Read all related documents carefully before investing.
                    </p>
                </div>

                <div className="footer-v4-bottom">
                    <p>© {currentYear} Yathesht Jain. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
