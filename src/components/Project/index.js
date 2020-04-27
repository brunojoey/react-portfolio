import React from "react";
import "./style.css";
import projects from "../../projects.json";
import Image from "react-bootstrap/Image";

function ProjectCard({title, image, alt, link}) {
    return (
        projects.map(project => (
            <div className="card projectBody">
                <Image src={project.image} alt={project.alt} fluid />
                <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <a href={project.link} className="btn btn-primary link">Check it Out</a>
                </div>
            </div>
        ))
    );
};

export default ProjectCard;