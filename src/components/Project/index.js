import React from "react";
import projects from "../../projects.json";
import ContainerDiv from "../Container";
import {Image, Row, Col } from "react-bootstrap";
import buildRoutes from "../../utils/buildRoutes";

function ProjectCard({ title, image, alt, link, claNM }) {
    return (
        projects.map(project => (
            <ContainerDiv className="card projectBody mb-3">
                <Row>
                    <Col s={10}>
                        <h3 className="card-title mt-3 p-3">{project.title}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col s={10}>
                        <Image className={project.claNM} src={buildRoutes(project.image)} alt={project.alt} />
                    </Col>
                    <Col s={2}>
                        <a href={project.link} className="btn btn-primary link">Check it Out</a>
                    </Col>
                </Row>
            </ContainerDiv>
        ))
    );
};

export default ProjectCard;