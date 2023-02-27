import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./userpage.css";
function UserNav() {
  return (
    <div className="userHome">
      <Navbar collapseOnSelect expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Sen Ji</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto justify-content-end flex-grow-1 pe-3"
              // className="justify-content-end align-items-center flex-grow-1 pe-3 my-2 my-lg-0 me-auto"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Category" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/upload">Sell Your product</Nav.Link>
              <NavDropdown title="Hello! Mr. xyz" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/your-product">
                  Your Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default UserNav;
