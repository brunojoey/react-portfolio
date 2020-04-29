import React from "react";
import buildRoutes from "../utils/buildRoutes";

const joeyBruno = "/images/joey-bruno-face.jpg";

function Home() {
    return (
        <div>
                <h2>Joseph Angelo Bruno</h2>
                <img src={buildRoutes(joeyBruno)} height="300" width="300" alt="Joey Bruno" className="joey"/>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
    )
};

export default Home;