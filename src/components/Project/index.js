import React from "react";
import "./style.css";
import projects from "../../projects.json";
import Image from "react-bootstrap/Image";
import buildRoutes from "../../utils/buildRoutes";

function ProjectCard({ title, image, alt, link }) {
    return (
        projects.map(project => (
            <div className="card projectBody">
                <Image src={buildRoutes(project.image)} alt={project.alt} />
                <h3 className="card-title">{project.title}</h3>
                <a href={project.link} className="btn btn-primary link">Check it Out</a>
            </div>
        ))
    );
};

export default ProjectCard;