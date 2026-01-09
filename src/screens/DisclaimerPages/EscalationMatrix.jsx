import React from 'react';
import '../Project.css';

const EscalationMatrix = () => {
    const tableData = [
        { label: 'Customer Care', name: 'Yathesht Jain' },
        { label: 'Head of Customer Care', name: 'Yathesht Jain' },
        { label: 'Compliance Officer', name: 'Yathesht Jain' },
        { label: 'CEO', name: 'Yathesht Jain' },
        { label: 'Principal Officer', name: 'Yathesht Jain' },
    ];

    const commonDetails = {
        address: 'Shree Sainath chs ltd, flat No. 1802, 18 th Floor, Parsi Panchayat Road, Andheri East, Next to Kaatyani heights, Mumbai, Maharashtra- 400069',
        contact: '+91 9636950969',
        email: 'cayathesht@gmail.com',
        hours: 'Mon-Fri 09 AM – 05 PM'
    };

    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <div className="rra-header">
                    <h1 className="rra-title">Escalation Matrix</h1>
                    <p className="rra-subtitle">If you have a grievance, you can reach out to our Support Team for assistance.</p>
                </div>

                {/* Table Section */}
                <div className="complaints-data-section">
                    <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)' }}>
                        <table className="custom-table" style={{ borderCollapse: 'collapse', width: '100%', margin: 0 }}>
                            <thead>
                                <tr>
                                    <th>Contact Person Name</th>
                                    <th>Details of Designation</th>
                                    <th>Address</th>
                                    <th>Contact</th>
                                    <th>Email ID</th>
                                    <th>Working Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td style={{ fontWeight: '600', color: 'var(--primary)' }}>{row.label}</td>
                                        <td>{row.name}</td>
                                        <td style={{ fontSize: '0.85rem', maxWidth: '300px', textAlign: 'left' }}>{commonDetails.address}</td>
                                        <td>{commonDetails.contact}</td>
                                        <td><a href={`mailto:${commonDetails.email}`} style={{ color: 'var(--secondary)', textDecoration: 'none' }}>{commonDetails.email}</a></td>
                                        <td>{commonDetails.hours}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EscalationMatrix;
