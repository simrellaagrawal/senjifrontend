import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./userpage.css";
function UserHome() {
  return (
    <div className="userHome">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Sen Ji</Navbar.Brand>
          <Nav
            className="justify-content-end align-items-center flex-grow-1 pe-3 my-2 my-lg-0 me-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/payment">Sell Your product</Nav.Link>
            <NavDropdown title="Hello! Mr. xyz" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default UserHome;
