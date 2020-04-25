import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <p> Made by Joey Bruno || @copy; 2020 </p>
            <a className="email" href="mailto: brunojoey12@gmail.com"> (brunojoey12@gmail.com) </a>
            <a href="https://www.github.com/brunojoey" className="fa fa-github">Github</a>
            <a href="https://www.linkedin.com/in/brunojoey/" className="fa fa-linkedin">LinkedIn</a>
        </footer>
    );
};

export default Footer;