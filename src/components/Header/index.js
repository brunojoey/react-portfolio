import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="navigationBar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="col-sm-4">
                    <NavDropdown.Item href="/Home">Home</NavDropdown.Item>
                    <NavDropdown.Item href="/About">About</NavDropdown.Item>
                    <NavDropdown.Item href="/Portfolio">Portfolio</NavDropdown.Item>
                    <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default Header;