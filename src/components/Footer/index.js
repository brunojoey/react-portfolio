import React from "react";
import {Row} from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Row s={10}>
                <span className="footer">
                    <p> Made by Joey Bruno | <a href="mailto: brunojoey12@gmail.com">brunojoey12@gmail.com</a> | 2020 </p>
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
            </Row>
        </footer>
    );
};

export default Footer;