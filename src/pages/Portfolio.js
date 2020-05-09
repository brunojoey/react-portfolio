import React from "react";
import Container from "../components/Container";
import ProjectCard from "../components/Project";

function Portfolio() {
    return (
        <div>
            <h2 className="portfolioHeading">Here Are Some Projects I Have Worked On!</h2>
            <Container>
                <ProjectCard fluid />
            </Container>
        </div>
    )
};

export default Portfolio;