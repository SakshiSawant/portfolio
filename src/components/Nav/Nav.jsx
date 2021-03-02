import React from "react";
import "./Nav.css";

const Nav = () => {
    return(
        <div className="nav-container">
            <div className="nav-left">
                <p className="logo">S</p>
            </div>
            <div className="nav-right">
                <a className="nav-link" href="http://google.com" rel="noreferrer">ABOUT</a>
                <a className="nav-link" href="http://google.com" rel="noreferrer">PROJECTS</a>
            </div>

        </div>
    );
};

export default Nav;