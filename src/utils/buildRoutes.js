import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

function buildRoutes() {
    const path = process.env.PUBLIC_URL;

    const routes = [
        {
            component: {Home},
            link: [path + "/", "/Home"]
        },
        {
            component: {Portfolio},
            link: [path + "/Portfolio"]
        },
        {
            component: {Contact},
            link: [path + "/Contact"]
        },
            
    ];
    
    return routes;
};

export default buildRoutes;