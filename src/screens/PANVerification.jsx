import React, { useState } from 'react';

const PANVerification = () => {
    const [pan, setPan] = useState('');
    const [dob, setDob] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [town, setTown] = useState('');
    const [postcode, setPostcode] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const [error, setError] = useState('');
    const [verified, setVerified] = useState(false); // Tracks if user clicked "I Verified"

    const handleVerify = (e) => {
        e.preventDefault();

        // Basic format check
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.toUpperCase())) {
            setError('Invalid PAN format (e.g., ABCDE1234F)');
            return;
        }
        if (!dob || !firstName || !lastName || !email || !phone || !address || !postcode) {
            setError('Please fill in all required fields marked with *');
            return;
        }

        setError('');

        // Open official Income Tax portal in new tab
        const officialUrl = 'https://www.incometax.gov.in/iec/foportal/';
        window.open(officialUrl, '_blank');
        setVerified(true); // Allow them to see the proceed button

        // Show instructions popup
        alert(
            'Official Income Tax PAN verification page opened in a new tab.\n\n' +
            'Steps:\n' +
            '1. Enter PAN: ' + pan.toUpperCase() + '\n' +
            '2. Enter full name as per PAN card\n' +
            '3. Enter DOB: ' + dob + '\n' +
            '4. Enter mobile number → receive OTP → verify\n\n' +
            'After successful verification, return here and click "I Have Verified My PAN".'
        );
    };

    const handleContinue = () => {
        // Your Razorpay/Cashfree payment function
        // loadRazorpayAndPay(); 
        window.location.href = '/payment';
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '1rem',
        marginBottom: '20px'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#333'
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '30px', background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#2b6777', textAlign: 'center', marginBottom: '10px' }}>Identity Verification</h2>

            <div style={{ background: '#e0f2f1', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #2b6777', marginBottom: '30px' }}>
                <h3 style={{ color: '#004d40', marginBottom: '10px', fontSize: '1.2rem' }}>📋 SEBI Compliance Requirement</h3>
                <p style={{ color: '#00695c', marginBottom: '8px', fontSize: '0.95rem' }}>
                    <strong>Step 1:</strong> As per SEBI regulations, PAN verification is mandatory for all investment accounts in India. This helps ensure compliance with KYC (Know Your Customer) norms.
                </p>
                <p style={{ color: '#00695c', marginBottom: '0', fontSize: '0.95rem' }}>
                    <strong>Step 2:</strong> After PAN verification, you need to accept Terms & Conditions via E-Sign to proceed with payment.
                </p>
            </div>

            <form onSubmit={handleVerify}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={labelStyle}>First Name *</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Last Name *</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={labelStyle}>Email *</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Phone *</label>
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required style={inputStyle} />
                    </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Address as per Aadhaar *</label>
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        rows="3"
                        style={{ ...inputStyle, marginBottom: '0' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={labelStyle}>Town / City</label>
                        <input type="text" value={town} onChange={(e) => setTown(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Postcode / ZIP *</label>
                        <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} required style={inputStyle} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={labelStyle}>State / County</label>
                        <input type="text" value={state} onChange={(e) => setState(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Country / Region</label>
                        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={labelStyle}>PAN Number *</label>
                        <input
                            type="text"
                            value={pan}
                            onChange={(e) => setPan(e.target.value.toUpperCase())}
                            placeholder="ABCDE1234F"
                            maxLength={10}
                            required
                            style={{ ...inputStyle, textTransform: 'uppercase' }}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Date of Birth *</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                            style={inputStyle}
                        />
                    </div>
                </div>

                {error && <p style={{ color: '#e74c3c', textAlign: 'center', marginBottom: '20px' }}>{error}</p>}

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '16px',
                        background: 'linear-gradient(135deg, #2b6777 0%, #52ab98 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginBottom: '30px',
                        boxShadow: '0 10px 20px rgba(43, 103, 119, 0.2)',
                        transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Verify PAN
                </button>
            </form>

            {/* Success / Continue Section – appears after verification instructions */}
            <div style={{
                background: verified ? '#d4edda' : '#fff3cd',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'center',
                border: verified ? '1px solid #c3e6cb' : '1px solid #ffeeba',
            }}>
                {verified ? (
                    <>
                        <h3 style={{ color: '#155724', marginBottom: '15px' }}>Verification in Progress</h3>
                        <p style={{ color: '#155724', marginBottom: '20px' }}>
                            Please complete the steps on the official Income Tax page that opened.
                        </p>
                        <button
                            onClick={handleContinue}
                            style={{
                                padding: '12px 40px',
                                background: '#155724',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                            }}
                        >
                            I Have Verified My PAN → Continue to Payment
                        </button>
                    </>
                ) : (
                    <p style={{ color: '#856404' }}>
                        After clicking "Verify PAN", follow the steps on the government page.
                    </p>
                )}
            </div>

            <p style={{ marginTop: '30px', textAlign: 'center', color: '#777', fontSize: '0.9rem' }}>
                We use the official Income Tax portal for secure & free PAN verification.
            </p>
        </div>
    );
};

export default PANVerification;