import React from "react";

const CentersCard = ({ number, title, points, knowMoreUrl, imgSrc }) => {
    return (
        <div className={`cc-card cc-card-${number}`}>
            <div className="cc-card-cont">
                <div
                    className="cc-front-side cc-side"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                >
                    <div className="cc-fs-title">
                        <p>{title}</p>
                    </div>
                </div>
                <div
                    className="cc-back-side cc-side"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                >
                    <div className="cc-bs-cont">
                        <p className="cc-bs-title">
                            What we Offer
                        </p>
                        <ul className="cc-bs-details">
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CentersCard;
