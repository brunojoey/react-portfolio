import React from "react";
import "./style.css";
import projects from "../../projects.json";
import Image from "react-bootstrap/Image";

function ProjectCard({ title, image, alt, github, deployed }) {
    return (
        projects.map(project => (
            <div className="card projectBody">
                <Image src={project.image} alt={project.alt} fluid />
                <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <a href={project.github} className="btn btn-primary gitHubLink">{project.github}</a>
                    <a href={project.deployed} className="btn btn-primary deployedLink">{project.deployed}</a>
                </div>
            </div>
        ))
    );
};

export default ProjectCard;