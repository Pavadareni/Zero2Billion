import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Data/Images/logo.png";
import "./navbar.css";

const Navbar = ({ mobileMenu, setMobileMenu, Session }) => {

    const [activeSection, setActiveSection] = useState(Session);
    const [scrollY, setScrollY] = useState(0);
    const mobileMenuRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleResize = () => {
        if (window.innerWidth > 1068) {
            setMobileMenu(false);
        }
    };

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        handleResize();
        const intervalId = setInterval(() => {
            handleResize();
        }, 1);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollY = window.pageYOffset + 50;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop;
                const sectionId = `#${current.getAttribute("id")}`;

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (mobileMenu) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [mobileMenu]);

    return (
        <nav id="navbar">
            <div 
                className="navbar-cont" 
                style={{ 
                    position: !mobileMenu ? "" : "relative",
                    boxShadow: scrollY > 100 ? "0 0 10px 0 rgba(0, 0, 0, 0.1)" : "none"
                }}
            >
                <div className="nav-cont" style={{ display: mobileMenu ? "none" : "flex" }}>
                    <div className="nav-img-container">
                        <Link to={"/"}>
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className="nc-inner-cont">
                        <ul className="nav-list-cont">
                            <li className={`${activeSection === "#home" ? "active" : ""}`}>
                                <a href="/#home">Home</a>
                            </li>
                            <li className={`${activeSection === "#about" ? "active" : ""}`}>
                            <Link to="/about-z2b">About</Link>
                            </li>
                            <li className={`${activeSection === "#services" ? "active" : ""}`}>
                                <a href="/#services">Services</a>
                            </li>
                            <li className={`${activeSection === "#centers" ? "active" : ""}`}>
                                <a href="/#centers">Centers</a>
                            </li>
                            <li className={`${activeSection === "#makers-turn" ? "active" : ""}`}>
                                <Link to={"/makers-turn"}>Makers Turn</Link>
                            </li>
                            <li className={`${activeSection === "#events" ? "active" : ""}`}>
                                <Link to="/events">Events</Link>
                            </li>
                            <li className={`${activeSection === "#gallery" ? "active" : ""}`}>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                        </ul>

                        <button className="investment-button">
                            <Link to={"/for-investment"}>
                                For Investment
                            </Link>
                        </button>
                        <div className="mobile-menu-toggle-button" onClick={toggleMobileMenu}>
                            <i className="bx bx-menu-alt-left"></i>
                        </div>
                    </div>
                </div>
                <div ref={mobileMenuRef} className={`mobile-nav-menu-cont ${mobileMenu ? "open" : ""}`}>
                    <div className="mobile-menu-toggle">
                        <div className="mobile-menu-close-button" onClick={toggleMobileMenu}>
                            <i className="bx bx-x"></i>
                        </div>
                    </div>
                    <div className="nav-img-container">
                        <Link to={"/"}>
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className="seperator-line"></div>
                    <ul className="mobile-nav-list-cont">
                        <li className={`${activeSection === "#home" ? "active" : ""}`}>
                            <a href="/#home" onClick={toggleMobileMenu}>Home</a>
                        </li>
                        <li className={`${activeSection === "#about" ? "active" : ""}`}>
                         <Link to="/about-z2b" onClick={toggleMobileMenu}>About</Link>
                        </li>
                        <li className={`${activeSection === "#services" ? "active" : ""}`}>
                            <a href="/#services" onClick={toggleMobileMenu}>Services</a>
                        </li>
                        <li className={`${activeSection === "#centers" ? "active" : ""}`}>
                            <a href="/#centers" onClick={toggleMobileMenu}>Centers</a>
                        </li>
                        <li className={`${activeSection === "#makers-turn" ? "active" : ""}`}>
                            <Link to="/makers-turn" onClick={toggleMobileMenu}>Makers Turn</Link>
                        </li>
                        <li className={`${activeSection === "#events" ? "active" : ""}`}>
                            <Link to="/events" onClick={toggleMobileMenu}>Events</Link>
                        </li>
                        <li className={`${activeSection === "#gallery" ? "active" : ""}`}>
                        <Link to="/gallery" onClick={toggleMobileMenu}>Gallery</Link>
                        </li>
                    </ul>
                    <button className="investment-button"><Link to={"/for-investment"}>For Investment</Link></button>
                </div>
                {mobileMenu && <div onClick={toggleMobileMenu} className="nav-mobile-overlay"></div>}
            </div>
        </nav>
    );
};

export default Navbar;