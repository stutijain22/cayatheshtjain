import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({
    children,
    direction = 'up',
    delay = 0,
    className = '',
    once = false
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [once]);

    const directionClass = direction === 'up' ? 'reveal-up' :
        direction === 'left' ? 'reveal-left' :
            direction === 'right' ? 'reveal-right' : 'reveal-up';

    const delayClass = delay > 0 ? `delay-${delay}` : '';

    return (
        <div
            ref={ref}
            className={`reveal ${directionClass} ${delayClass} ${isVisible ? 'active' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;
