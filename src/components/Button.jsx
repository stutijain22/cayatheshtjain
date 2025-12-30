import React from 'react';


const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', as: Component = 'button', ...props }) => {
    return (
        <Component
            type={Component === 'button' ? type : undefined}
            className={`cta-button ${variant} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
