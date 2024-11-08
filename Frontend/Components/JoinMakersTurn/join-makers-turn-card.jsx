import React from "react";

const JoinMakersTurnCard = ({ number, title, imgScr }) => {
    return (
        <div className={`jmtc-cc-card jmtc-cc-card-${number}`}>
            <div className="jmtc-cc-card-cont">
                <div className="jmtc-cc-cc-img-cont">
                    <img src={imgScr} alt="" />
                </div>
                <p className="jmtc-cc-cc-title">
                    {title}
                </p>
            </div>
        </div>
    )
};

export default JoinMakersTurnCard;