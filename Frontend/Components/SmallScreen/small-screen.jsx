import React from "react";
import SmallLogo from "../../../Data/Images/favicon-logo-trans-bg.png";
import "./small-screen.css"

const SmallScreen = () => {
    return (
        <secction id="small-screen">
            <div className="ss-cont">
                <div className="ss-img-cont">
                    <img src={SmallLogo} alt="" srcset="" />
                </div>
                <div className="ss-text-cont">
                    <p className="ss-tc-title">Zero2Billion</p>
                    <div className="ss-tc-msg">
                        <p>Screen size too small.</p>
                        <p>Please use a larger screen.</p>
                    </div>
                </div>
            </div>
        </secction>
    )
}

export default SmallScreen;