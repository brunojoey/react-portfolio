import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

function Home() {
    return (
        <div>
            <Header />
                <h1 className="nameHeader">Joseph Angelo Bruno</h1>
                <div className="welcome">
                    Welcome to my portfolio!
                </div>
            <Footer className="footer"/>
        </div>
    )
};

export default Home;