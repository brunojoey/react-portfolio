import React from "react";
import "./style.css";

function ContactForm () {
    return (
        <div className="content">
            <a className="email" href="mailto: brunojoey12@gmail.com">Email</a>
            <a href="https://www.github.com/brunojoey" className="github">GitHub</a>
            <a href="https://www.linkedin.com/in/brunojoey" className="linkedin">LinkedIn</a>
        </div>
    );
};

export default ContactForm;