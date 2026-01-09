import React from 'react';
import '../Project.css';

const ComplaintsData = () => {
    const monthEndingData = [
        { sr: 1, from: 'Directly from Investors', pending: 0, received: 0, resolved: 0, total: 0, pending3m: 0, avgTime: '-' },
        { sr: 2, from: 'SEBI (SCORES)', pending: 0, received: 0, resolved: 0, total: 0, pending3m: 0, avgTime: '-' },
        { sr: 3, from: 'Other Sources', pending: 0, received: 0, resolved: 0, total: 0, pending3m: 0, avgTime: '-' },
    ];

    const trendData = [
        { sr: 1, month: 'August 2025', carried: 0, received: 0, resolved: 0, pending: 0 },
        { sr: 2, month: 'September 2025', carried: 0, received: 0, resolved: 0, pending: 0 },
        { sr: 3, month: 'October 2025', carried: 0, received: 0, resolved: 0, pending: 0 },
        { sr: 4, month: 'November 2025', carried: 0, received: 0, resolved: 0, pending: 0 },
        { sr: 5, month: 'December 2025', carried: 0, received: 0, resolved: 0, pending: 0 },
    ];

    return (
        <div className="rra-page">
            <div className="rra-container">
                {/* Header */}
                <div className="rra-header">
                    <h1 className="rra-title">Complaints Data</h1>
                    <p className="rra-subtitle">Quarterly & Monthly Disclosure</p>
                </div>

                {/* Table 1 */}
                <div className="complaints-data-section">
                    <div className="table-header-box">
                        Data for the Month Ending December 2025
                    </div>
                    <div style={{ borderRadius: '0 0 12px 12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)' }}>
                        <table className="custom-table" style={{ margin: 0 }}>
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Received from</th>
                                    <th>Pending at the end of last month</th>
                                    <th>Received</th>
                                    <th>Resolved</th>
                                    <th>Total Pending</th>
                                    <th>Pending complaints {'>'} 3months</th>
                                    <th>Average Resolution time (in days)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthEndingData.map((row) => (
                                    <tr key={row.sr}>
                                        <td>{row.sr}</td>
                                        <td>{row.from}</td>
                                        <td>{row.pending}</td>
                                        <td>{row.received}</td>
                                        <td>{row.resolved}</td>
                                        <td>{row.total}</td>
                                        <td>{row.pending3m}</td>
                                        <td>{row.avgTime}</td>
                                    </tr>
                                ))}
                                <tr className="grand-total-row">
                                    <td></td>
                                    <td>Grand Total</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Table 2 */}
                <div className="complaints-data-section">
                    <div className="table-header-box">
                        Trend of monthly disposal of complaints
                    </div>
                    <div style={{ borderRadius: '0 0 12px 12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)' }}>
                        <table className="custom-table" style={{ margin: 0 }}>
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Month</th>
                                    <th>Carried forward from previous month</th>
                                    <th>Received</th>
                                    <th>Resolved</th>
                                    <th>Pending</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trendData.map((row) => (
                                    <tr key={row.sr}>
                                        <td>{row.sr}</td>
                                        <td>{row.month}</td>
                                        <td>{row.carried}</td>
                                        <td>{row.received}</td>
                                        <td>{row.resolved}</td>
                                        <td>{row.pending}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Table 3 */}
                <div className="complaints-data-section">
                    <div className="table-header-box">
                        Trend of annual disposal of complaints
                    </div>
                    <div style={{ borderRadius: '0 0 12px 12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)' }}>
                        <table className="custom-table" style={{ margin: 0 }}>
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Year</th>
                                    <th>Carried forward from previous year</th>
                                    <th>Received</th>
                                    <th>Resolved</th>
                                    <th>Pending</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2025-26</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplaintsData;
