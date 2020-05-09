import React from 'react';
import {Row, Col} from "react-bootstrap";

var styleUL = {
    listStyleType: "none"
}

var styleLI = {
    paddingLeft: "set_padding"
}

function Resume() {
    return (
        <div>
            <div className="intro">
                <h1 className="resumeHeadings">Joseph Bruno</h1>
                <p> The Greater Nashville Area </p>
                <a className="btn btn-primary resumeLinks mr-3 mt-3" href="mailto: brunojoey12@gmail.com">Email</a>
                <a className="btn btn-primary resumeLinks mt-3" href="https://brunojoey.github.io/react-portfolio">Portfolio Link</a>
            </div>
            <div className="summary">
                <h3 className="resumeHeadings">Summary</h3>
                <p> Full Stack Web Developer with a background in social media providing strong problem-solving skills with a keen eye for aesthetics and presentation. </p>
                <p>An excellent communicator and collaborator works well in team-based projects and independently with strong interpersonal skills. </p>
            </div>
            <div className="techSkills">
                <h3 className="resumeHeadings">Technical Skills</h3>
                <Row>
                    <Col>
                        <ul className="mx-5" style={styleUL}>
                            <li style={styleLI}>Node JS</li>
                            <li style={styleLI}>Express</li>
                            <li style={styleLI}>JavaScript</li>
                            <li style={styleLI}>jQuery</li>
                            <li style={styleLI}>React.js</li>
                            <li style={styleLI}>Git</li>
                            <li style={styleLI}>Github</li>
                            <li style={styleLI}>MongoDB</li>
                            <li style={styleLI}>MySQL</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul clasName="mx-5" style={styleUL}>
                            <li style={styleLI}>Postman</li>
                            <li style={styleLI}>Handlebars</li>
                            <li style={styleLI}>HTML</li>
                            <li style={styleLI}>CSS</li>
                            <li style={styleLI}>Bootstrap</li>
                            <li style={styleLI}>Media Queries</li>
                            <li style={styleLI}>API's</li>
                            <li style={styleLI}>Heroku</li>
                            <li style={styleLI}>Skeleton CSS</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="employeeSummaryPro mt-3">
                <h3 className="resumeHeadings">Projects</h3>
                <p className="resumeProjects"> Employee Summary | Back-End Developer </p>
                <p> This employee application helps you create your employee database into a HTML document with the help of various prompts that include an Intern, an Engineer, and a Manager. </p>
                <p> <strong>Role:</strong> Responsible for creating the functionality for the application to work. </p>
                <p> <strong>Utilized:</strong> HTML5 and JavaScript </p>
                <a className="resumeLinks btn btn-primary my-3" href="https://github.com/brunojoey/employee-summary"> Code Link</a>
            </div>
            <div className="budgetTrackerPro">
                <p className="resumeProjects"> Budget Tracker | Full Stack Developer </p>
                <p> This is a Budget Tracker application so the user can track a budget and payments. </p>
                <p> <strong>Role:</strong> Responsible for creating an application with a budget, Node JS, and Mongoose. </p>
                <p> <strong>Utilized:</strong> Manifest, Node JS, Service Worker, Mongoose, and Heroku for hosting </p>
                <a className="deployedLinks btn btn-primary mr-3" href="https://boiling-lake-39406.herokuapp.com/"> Deployed Link </a>
                <a className="resumeLinks btn btn-primary my-3" href="https://github.com/brunojoey/budget-tracker"> Code Link </a>
            </div>

            <div className="geolocaitonPro">
                <p className="resumeProjects"> Geolocation Dictionary Application | Front-End Developer </p>
                <p> This dictionary uses your searches and your location to pinpoint where you are searching from and what are the most popular searches in your area. </p>
                <p> <strong>Role:</strong> Responsible for co-designing the application. </p>
                <p> <strong>Utilized:</strong> HTML5, Skeleton CSS, JavaScript, and hosting/domain from GitHub Pages </p>
                <a className="deployedLinks btn btn-primary mr-3" href="https://brunojoey.github.io/geolocation-dictionary-app/"> Deployed Link </a>
                <a className="resumeLinks btn btn-primary my-3" href="https://github.com/brunojoey/geolocation-dictionary-app"> Code Link </a>
            </div>
            <div className="experience">
                <h3 className="resumeHeadings">Experience</h3>
                <p>Rizzy Home: Calhoun, GA || September 2018 – May 2019</p>
                <p>Social Media Manager | Graphic Designer</p>
                <p>Contributions include various social media content and helping to design and organize the Rizzy Home 2019 Catalog to create a cohesive look for Rizzy Home and their products. </p>
            </div>
            <div className="education mt-3">
                <h3 className="resumeHeadings">Education</h3>
                <h4>Vanderbilt University, Nashville, TN </h4>
                <p><strong>Full Stack Web Development | Coding Certificate | 2020</strong></p>
                <p>Gained technical programming skills: HTML, CSS, JavaScript, Express.js, React.js, Node.js, and MySQL. </p>

                <h4>The University of Tennessee at Chattanooga, Chattanooga, TN </h4>
                <p><strong>Bachelors of Arts | Communications | Spanish</strong></p>
            </div>

        </div>
    )

};

export default Resume;