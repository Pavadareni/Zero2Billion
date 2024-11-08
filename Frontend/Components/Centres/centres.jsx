import React from "react";
import CentersCard from "./centres-card";
import { Link } from "react-router-dom";
import { CentersData, redirectUrl } from "../../../Data/centres-data";   
import "./centres.css";

const Centres = () => {
    return (
        <section id="centers">
            <div className="centers-cont">
                <p className="cc-title">
                    Centre's for Expertise
                </p>
                <p className="cc-describe">
                    We have deep technical expertise and experience across various sectors.
                </p>
                <div className="cc-card-cont">
                    {
                        CentersData.map(( item, index ) => (
                            <CentersCard
                                key={index}
                                number={index + 1}
                                title={item.title}
                                description={item.description}
                                imgScr={item.imgScr}
                            />
                        ))
                    }
                </div>
                <Link 
                    to={redirectUrl}
                    className="cc-button"
                >
                    View All
                </Link>
                <div className="cc-partial-hide"></div>
            </div>
        </section>
    )
};

export default Centres;