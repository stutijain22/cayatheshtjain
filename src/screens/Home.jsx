import React, { useEffect, useRef } from 'react';
import './Project.css';
import Button from '../components/Button';

const Home = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (svgRef.current) {
                const lines = svgRef.current.querySelectorAll('.line');
                lines.forEach(el => el.classList.add('complete'));
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="video-container" id="home">
            <video className="bg-video" autoPlay muted loop playsInline>
                <source src="/arrowVideo.mp4" type="video/mp4" />
            </video>

            <div className="hero">
                <div className="hero-center">
                    <h2 className="slide-in-text">Grow your financial health</h2>
                    <Button variant="primary" className="journey-btn">Start your journey</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
