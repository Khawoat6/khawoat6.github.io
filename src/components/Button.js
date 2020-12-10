import React from 'react';
import resume from '../assets/static/Resume_PhattaraphonC.pdf';

function Button() {
    return (
        <div className="button">
            <a href={resume} target="_blank" rel="noreferrer" class="arrow-link">Resume</a>
        </div>
    );
}

export default Button;