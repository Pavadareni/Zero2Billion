// assistance-card.jsx
import React, { useState } from "react";
import imgScr from "../../../Data/Images/redirect-arrow.png";

const AssistanceCard = ({ number, title, description, doubleLine }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`ac-cc-card ac-cc-card-${number} ${isOpen ? "open" : ""}`} onClick={handleClick}>
            <div className="ac-cc-card-cont">
                <p className={`ac-cc-cc-title ${doubleLine ? "double-line" : ""}`}>
                    {title}
                </p>
                <p className="ac-cc-cc-describe">
                    {description}
                </p>
                <div className="ac-cc-cc-button">
                    <img src={imgScr} alt="Toggle" />
                </div>
            </div>
        </div>
    );
};

export default AssistanceCard;
