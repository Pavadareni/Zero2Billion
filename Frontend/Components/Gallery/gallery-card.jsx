import React from "react";
import { Link } from "react-router-dom";
import "./gallery.css";

const GalleryCard = ({ number, imgSrc, linkUrl }) => {
    return (
        <div className={`gallery-card gallery-card-${number}`}>
            <Link to={linkUrl} className="gallery-card-link">
                <div
                    className="gallery-card-content"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                >
                </div>
            </Link>
        </div>
    );
};

export default GalleryCard;
