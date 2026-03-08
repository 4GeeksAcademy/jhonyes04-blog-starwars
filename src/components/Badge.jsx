import React from 'react';

export const Badge = ({ label, colorFondo, colorLabel, posicion }) => {
    let position = 'none';

    switch (posicion) {
        case 'top-left':
            position = 'top-0 start-0';
            break;
        case 'top-right':
            position = 'top-0 end-0';
            break;
        case 'bottom-left':
            position = 'bottom-0 start-0';
            break;
        case 'bottom-right':
            position = 'bottom-0 end-0';
            break;
        default:
            position = 'none';
            break;
    }

    return (
        <span
            className={`badge m-2 ${position !== 'none' ? `position-absolute ${position}` : ''} ${colorFondo} ${colorLabel}`}
        >
            {label}
        </span>
    );
};
