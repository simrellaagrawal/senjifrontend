import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function HomeNav() {
  return (
    <div id="home">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">Sen Ji</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/terms&conditions">Terms and Conditions</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/admin-login">Admin Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
