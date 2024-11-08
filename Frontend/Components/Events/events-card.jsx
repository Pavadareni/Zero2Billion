import React from "react";
import { Link } from "react-router-dom";
import "./events.css";

const EventsCard = ({ imgSrc, linkUrl }) => {
    return (
        <Link to={linkUrl} className="events-card-link">
            <div className="events-card">
                <img 
                    src={imgSrc} 
                    alt="Event" 
                    className="events-card-image"
                />
            </div>
        </Link>
    );
};

export default EventsCard;
