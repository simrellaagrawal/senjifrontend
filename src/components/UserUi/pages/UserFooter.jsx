import "./user-content.css";
import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

export default function UserFooter() {
  return (
    <div className="footer">
      <div className="top">
        <Container>
          <Row>
            <Col lg={4} className="item">
              <h1>Categories</h1>
              <span>Electronic</span>
              <span>Electric</span>
              <span>Plastic</span>
              <span>Cloths</span>
              <span>Property</span>
              <span>Furniture</span>
            </Col>
            <Col lg={4}>
              <h1>About</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </span>
            </Col>
            <Col lg={4}>
              <h1>Contact</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom">
        <p>@Copyright since 2021</p>
      </div>
    </div>
  );
}
