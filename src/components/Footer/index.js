import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <p> Made by Joey Bruno || 2020 </p>
                <a href="mailto: brunojoey12@gmail.com" className="email"> Send Me an Email! </a>
                <a href="https://www.github.com/brunojoey" className="github">Github</a>
                <a href="https://www.linkedin.com/in/brunojoey/" className="linkedin">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;