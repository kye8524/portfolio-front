import React from "react";
import "./header.css";

function header() {
    return (
        <header>
        <div className="header_title">
            <div className="header_div">HOME</div>
            <div className="header_div">ABOUT</div>
            <div className="header_div">PORTFOLIO</div>
            <div className="header_div">BLOG</div>
            <div className="header_div">CONTACT</div>
        </div>
        </header>
    );
}

export default header;