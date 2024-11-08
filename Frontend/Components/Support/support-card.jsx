import React from "react";
import { Link } from "react-router-dom";

const SupportCard = ({ number, title, details, knowMoreUrl, imgScr }) => {
    return (
        <div className={`sc-cc-card sc-cc-card-${number}`}>
            <div className="sc-cc-card-cont">
                <div
                    className="sc-cc-cc-front-side sc-cc-cc-side"
                    style={{ backgroundImage: `url(${imgScr})` }}
                >
                    <div className="sc-cc-cc-fs-title">
                        <p>{title}</p>
                    </div>
                </div>
                <div
                    className="sc-cc-cc-back-side sc-cc-cc-side"
                    style={{ backgroundImage: `url(${imgScr})` }}
                >
                    <div className="sc-cc-cc-bs-cont">
                        <p className="sc-cc-cc-bs-title">
                            {title}
                        </p>
                        <p className="sc-cc-cc-bs-details">
                            {details}
                        </p>
                        <Link to={knowMoreUrl} className="sc-cc-cc-bs-button">Know More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SupportCard;