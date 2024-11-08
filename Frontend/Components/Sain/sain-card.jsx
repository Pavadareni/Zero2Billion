import React from "react";
import { Link } from "react-router-dom";

const SainCard = ({ title, description, buttonText, borderColor, imgSrc , joinUrl }) => {
  return (
    <div className="sain-card" style={{ borderTopColor: borderColor }}>
      <div className="sain-card-image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="sain-card-content">
        <div className="sain-card-title">{title}</div>
        <div className="sain-card-description">{description}</div>
        <Link to={joinUrl}>
          <button className="sain-card-button">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default SainCard;
