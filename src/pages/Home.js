import React from "react";
import buildRoutes from "../utils/buildRoutes";
import Container from "../components/Container";
import {Row, Col} from "react-bootstrap";

const joeyBruno = "/images/professional-joey-photo.jpg";

function Home() {
    return (
        <div className="home m-5">
            <Container>
                <h1>Joseph Angelo Bruno</h1>
                <Row>
                    <Col s={4}>
                        <img src={buildRoutes(joeyBruno)} alt="Joey Bruno" className="joey m-5" height="400" width="400" />
                    </Col>
                    <Col s={8}>
                        <div className="joeyText m-5">
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Home;