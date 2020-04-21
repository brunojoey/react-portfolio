import React from "react";
import Projects from "../../projects.json";

function ProjectCard({title, image, github, deployed}) {
    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src={ image }/>
            <div class="card-body">
                <h5 class="card-title">{ title }</h5>
                <a href={ github } class="btn btn-primary">{ github }</a>
                <a href={ deployed } class="btn btn-primary">{ deployed }</a>
            </div>
        </div>    
    );
};

export default ProjectCard;