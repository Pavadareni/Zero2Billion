import React from "react";

const CentersCard = ({ number, title, description, imgScr }) => {
    return (
        <div className={`cc-cc-card cc-cc-card-${number}`}>
            <div className="cc-cc-card-cont">
                <div className="cc-cc-cc-title-cont">
                    <p className="cc-cc-cc-tc-title">
                        {title}
                    </p>
                    <div className="cc-cc-cc-tc-img-cont">
                        <img src={imgScr} alt="" />
                    </div>
                </div>
                <p className="cc-cc-cc-description">
                    {description}
                </p>
            </div>
        </div>
    )
};

export default CentersCard;