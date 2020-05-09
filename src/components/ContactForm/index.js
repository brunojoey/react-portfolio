import React from "react";
import {Row, Col} from "react-bootstrap"

function ContactForm () {
    return (
        <div>
            <Row>
                <Col s={10}>
                    <h1 className="contactHeading">Contact Me</h1>
                </Col>
            </Row>
            <div className="contactLinks">
                <Row>
                    <Col s={10}>
                        <a className="emailContact" href="mailto: brunojoey12@gmail.com">Email</a>
                    </Col>
                </Row>
                <Row>
                    <Col s={10}>
                        <a className="githubContact" href="https://www.github.com/brunojoey">GitHub</a>
                    </Col>
                </Row>
                <Row>
                    <Col s={10}>
                        <a className="linkedinContact" href="https://www.linkedin.com/in/brunojoey">LinkedIn</a>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactForm;