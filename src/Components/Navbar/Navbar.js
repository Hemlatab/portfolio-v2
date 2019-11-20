/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
// import GitHub from "../../images/github.png";

const MenuBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Hemlata</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <a href="https://github.com/Hemlatab" target="_blank">
            <i className="fab fa-github-alt fa-fw-nav ml-2"></i>
          </a>
        </Nav>
      </Navbar>
    </>
  );
};

export default MenuBar;
