import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ProjectCard from "../components/Project";

function Portfolio() {
    return (
        <div>
            <Header />
            <h2>Here Are Some Projects I Have Worked On!</h2>
            <Container>
                <ProjectCard />
            </Container>
            <Footer />
        </div>
    )
};

export default Portfolio;