import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import redirectLogo from '../../../Data/Images/redirect-up-arrow.png';

const CardContainerDiv = styled.div`
    /* Set background image */
    position: relative;
    background-image: url(${props => props.bgImg});
    background-size: cover;
`;

const OverlayContainerDiv = styled.div`
    background-color: ${props => props.stripColor};
`;

const GetMakersTurnCard = ({ number, title, description, redirectUrl, stripColor, bgImg }) => {
    return (
        <div className={`gmtc-cc-card gmtc-cc-card-${number}`}>
            <CardContainerDiv className="gmtc-cc-card-cont" bgImg={bgImg}>
                <OverlayContainerDiv 
                    className="gmtc-cc-cc-up-overlay-cont"
                    stripColor={stripColor}
                >
                    <Link to={redirectUrl} className="gmtc-cc-cc-redirect">
                        <img src={redirectLogo} alt="" />
                    </Link>
                    <p className="gmtc-cc-cc-title">
                        {title}
                    </p>
                    <p className="gmtc-cc-cc-description">
                        {description}
                    </p>
                </OverlayContainerDiv>
                <p className="gmtc-cc-cc-title">
                    {title}
                </p>
            </CardContainerDiv>
        </div>
    )
}

export default GetMakersTurnCard;
