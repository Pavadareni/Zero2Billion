import React from "react";
import arrowImg from "../../../Data/Images/redirect-arrow.png";
import { Link } from "react-router-dom";

const StartupProgramCard = ({ number, numberStr, title, points, imgScr, redirectUrl }) => {
    const groupedPoints = [];
    const itemsPerGroup = 4;

    for (let i = 0; i < points.length; i += itemsPerGroup) {
        groupedPoints.push(points.slice(i, i + itemsPerGroup));
    }

    return (
        <div className={`spc-cc-card spc-cc-card-${number}`}>
            <div className="spc-cc-card-cont">
                <p className="spc-cc-cc-title">
                    {title}
                </p>
                <div className="spc-cc-cc-points-cont">
                    {groupedPoints.map((group, groupIndex) => (
                        <ul key={groupIndex} className={`spc-cc-cc-points-list spc-cc-cc-points-list-${groupIndex + 1}`}>
                            {group.map((point, index) => (
                                <li key={index} className="spc-cc-cc-points">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="spc-cc-cc-img-cont">
                    <img src={imgScr} alt="" />
                    <p className="spc-cc-cc-ic-number">
                        {numberStr}
                    </p>
                </div>
                {/* <Link
                    to={redirectUrl}
                    className="spc-cc-cc-button"
                >
                    Know More &nbsp; <img src={arrowImg} alt="" />
                </Link> */}
            </div>
        </div>
    );
};

export default StartupProgramCard;