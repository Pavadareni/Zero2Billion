import React from 'react';
import './kickoff.css';

const KickoffCard = ({ title, description, linkedinURL, topcolor, imgsrc }) => {
    return (
        <div className="kickoff-card" style={{ borderTopColor: topcolor }}>
            <div className="kickoff-card-content">
                <div className="kickoff-card-title">{title}</div>
                <div className="kickoff-card-description">{description}</div>
                <a href={linkedinURL} className="kickoff-card-link" target="_blank" rel="noopener noreferrer">
                    <div style={{ width: 70, textAlign: 'center', color: '#3D51A3', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>LinkedIn</div>
                </a>
            </div>
            <div className="kickoff-card-image">
                <img src={imgsrc} alt={title} />
            </div>
        </div>
    );
};

export default KickoffCard;
