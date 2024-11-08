import React from "react";

const ServicesCard = ({
    number,
    title,
    points
}) => {
    return (
        <div className={`sc-cc-wc-card sc-cc-wc-card-${number}`}>
            <div className="sc-cc-wc-card-cont">
                <p className="sc-cc-wc-cc-title" dangerouslySetInnerHTML={{ __html: title }} />
                <ul className="sc-cc-wc-cc-points-cont">
                    {
                        points.map((item, index) => (
                            <li className="sc-cc-wc-cc-pc-item" key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default ServicesCard;
