import React from "react";
import Image from "react-bootstrap";

function buildRoutes() {
    const path = process.env.PUBLIC_URL;

    const routes = [
        {
            title: "Note Taker",
            image: "../src/images/note-taker-demo.gif",
            alt: "Note Taker Demo Gif",
            link: "https://afternoon-tor-09367.herokuapp.com/"
        },
        {
            title: "Password Generator",
            image: "../src/images/password-generator-screenshot.jpg",
            alt: "Password Generator Image",
            link: "https://brunojoey.github.io/password-generator/"
        },
        {
            title: "README Generator",
            image: "../src/images/readme-generator-demo.gif",
            alt: "README Generator Demo Gif",
            link: "https://github.com/brunojoey/readme-generator"
        },
        {
            title: "Budget Tracker",
            image: "../src/images/budget-tracker-demo.gif",
            alt: "Budget Tracker Demo Gif",
            link: "https://boiling-lake-39406.herokuapp.com/"
        },
        {
            title: "Employment Management System",
            image: "../src/images/employee-system-demo.gif",
            alt: "Employee System Demo Gif",
            link: "https://github.com/brunojoey/employment-management-system"
        },
        {
            title: "Employee Manager",
            image: "../src/images/employee-summary-screenshot.png",
            alt: "Employee Summary Image",
            link: "https://github.com/brunojoey/employee-summary"
        }
    ];
    
    return (
        routes.map(route => (
        <div className="card projectBody">
            <Image src={path + route.image} alt={route.alt} fluid />
            <div className="card-body">
                <h3 className="card-title">{route.title}</h3>
                <a href={route.link} className="btn btn-primary link">Check it Out</a>
            </div>
        </div>

    ))
    );
};

export default buildRoutes;