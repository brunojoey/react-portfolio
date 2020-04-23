import React from "react";
import projects from "../../projects.json";

function ProjectCard({ title, image, github, deployed }) {
    return (
        projects.map(project => (
            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src={project.image} />
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <a href={project.github} className="btn btn-primary">{project.github}</a>
                    <a href={project.deployed} className="btn btn-primary">{project.deployed}</a>
                </div>
            </div>

        ))
    );
};

export default ProjectCard;