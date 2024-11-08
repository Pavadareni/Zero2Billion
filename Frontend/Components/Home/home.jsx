import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = ({ mobileMenu }) => {
    return (
        <section 
            id="home"
            style={{
                height: "100vh",
                minHeight: "660px",
            }}
        >
            <div className="home-cont">
                <div className="hc-text-cont">
                    <div className="hc-tc-title">
                        <p>Your Vision,</p>
                        <p>Our <span>Expertise.</span></p>
                    </div>
                    <p className="hc-tc-desc">
                        From Seed to Scale, <span>We Empower Entrepreneurs</span>
                    </p>
                </div>
                <button className="hc-button-cont">
                    <Link to="/for-investment">Let's Get Started</Link>
                </button>
            </div>
        </section>
    );
};

export default Home;