import React from "react";

function Footer() {
    return (
        <footer>
                <span className="footer">
                    <p> Made by Joey Bruno || 2020 </p>
                    <a href="mailto: brunojoey12@gmail.com" className="email mx-3">
                        <span className="fa fa-envelope"></span> 
                    </a>
                    <a href="https://www.github.com/brunojoey" className="github mx-3">
                        <span className="fa fa-github"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/brunojoey/" className="linkedin mx-3">
                        <span className="fa fa-linkedin"></span>
                    </a>
                </span>
        </footer>
    );
};

export default Footer;