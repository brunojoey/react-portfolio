import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import buildRoutes from "../../utils/buildRoutes";
import "./style.css";

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="navigationBar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href={buildRoutes("/home")}>Home</Nav.Link>
                <Nav.Link href={buildRoutes("/portfolio")}>Portfolio</Nav.Link>
                <Nav.Link href={buildRoutes("/contact")}>Contact</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="col-sm-4">
                    <NavDropdown.Item href={buildRoutes("/home")}>Home</NavDropdown.Item>
                    <NavDropdown.Item href={buildRoutes("/portfolio")}>Portfolio</NavDropdown.Item>
                    <NavDropdown.Item href={buildRoutes("/contact")}>Contact</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default Header;