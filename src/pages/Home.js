import React from "react";
import buildRoutes from "../utils/buildRoutes";
import Container from "../components/Container";
import {Row, Col, Image} from "react-bootstrap";

const joeyBruno = "/images/professional-joey-photo.jpg";

function Home() {
    return (
        <div className="home m-5">
            <Container>
                <h1>Joseph Angelo Bruno</h1>
                <Row>
                    <Col s={3} m={3} lg={5}>
                        <Image src={buildRoutes(joeyBruno)} alt="Joey Bruno" className="joey" fluid />
                    </Col>
                    <Col className="joeyText m-5" s={9} m={8}>
                        <p className="mt-5"> A Web Developer that has Social Media experience from working with Rizzy Home in Calhoun, Georgia where I gained valuable knowledge of brand organization and brand design. Recently gained a coding certificate in Vanderbilt's Web Developer Bootcamp. Proficient in HTML, CSS, JavaScript, React, Node.Js, Express, etc. An excellent communicator and collaborator that works well on team-based projects as well as independently. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Home;