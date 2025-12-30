import React from 'react';


const Section = ({
    id,
    title,
    subtitle,
    children,
    background = 'light',
    titleAlign = 'center',
    className = ''
}) => {
    return (
        <section
            className={`section ${background === 'dark' ? 'section-dark' : 'section-light'} ${className}`}
            id={id}
        >
            <div className="container">
                {(title || subtitle) && (
                    <div className={`section-header ${titleAlign === 'left' ? 'align-left' : 'align-center'}`}>
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                    </div>
                )}
                <div className="section-content">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
