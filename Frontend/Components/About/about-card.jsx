import React from "react";

const AboutCard = ({
    number,
    title,
    description,
    highlightAfter,
    highlightBefore,
    imgScr,
}) => {
    return (
        <div className={`about-card about-card-${number}`}>
            <div className="ac-text-cont">
                <p className="ac-tc-title">{title}</p>

                <p className="ac-tc-description"> {(highlightBefore!=="") && (
                        <span className="ac-tc-highlight-details">{highlightBefore}</span>
                    )}
                    {description}
                    {(highlightAfter!=="") && (
                        <span className="ac-tc-highlight-details">{highlightAfter}</span>
                    )}
                </p>
            </div>
            <div className="ac-img-cont">
                <img src={imgScr} alt="" srcset="" />
            </div>
        </div>
    );
};

export default AboutCard;