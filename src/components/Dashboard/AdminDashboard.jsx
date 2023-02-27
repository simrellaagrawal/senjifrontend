import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function AdminNav() {
  return (
    <div className="adminnav">
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Sen Ji</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto justify-content-end flex-grow-1 pe-3"
              // className="justify-content-end align-items-center flex-grow-1 pe-3 my-2 my-lg-0 me-auto"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/admin-dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="#">Notification</Nav.Link>
              <Nav.Link href="#">Upload</Nav.Link>
              <Nav.Link href="#">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AdminNav;
