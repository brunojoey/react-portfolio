import React from "react";
import "./style.css";

function ContactForm () {
    return (
        <div className="res">
            <a  href="mailto: brunojoey12@gmail.com" className="emailOne">Email</a>
            <a href="https://www.github.com/brunojoey" className="githubOne">GitHub</a>
            <a href="https://www.linkedin.com/in/brunojoey" className="linkedinOne">LinkedIn</a>
        </div>
    );
};

export default ContactForm;