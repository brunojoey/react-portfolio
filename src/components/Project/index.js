import React from "react";
import projects from "../../utils/projects.json";
import ContainerDiv from "../Container";
import { Image, Row, Col } from "react-bootstrap";
import buildRoutes from "../../utils/buildRoutes";

function ProjectCard({ title, image, alt, github, deploy, description, technologies, claNM }) {
    return (
        projects.map(project => (
            <ContainerDiv className="card projectBody mb-3">
                <Row className='card-title'>
                    <Col s={5} lg={10}>
                        <h3 className="card-title mt-3">{project.title}</h3>
                    </Col>
                </Row>
                <Row className="allWebImages mb-3">
                    <Col s={4} m={6} lg={8}>
                        <Image className={project.claNM} src={buildRoutes(project.image)} alt={project.alt} />
                    </Col>
                </Row>
                    <Row>
                        <Col s={4} m={6} lg={12}>
                            <p className="description">{project.description}</p>
                            <p className="technologies">Tools Utilized: {project.technologies}</p>
                        </Col>
                    </Row>
                    <Row className="buttons">
                        <Col s={4} m={6} lg={10}>
                            <a href={project.deploy} className="btn btn-primary deploy mb-5">Check it Out</a>
                            <a href={project.github} className="btn btn-primary githubProject ml-3 mb-5">The Code</a>
                        </Col>
                    </Row>
            </ContainerDiv>
        ))
    );
};

export default ProjectCard;