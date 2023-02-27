import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./userpage.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import UserNav from "./UserNav";

export default function Payment() {
  const navigate = useNavigate();

  return (
    <div>
      <UserNav />
      <Container className="plan">
        <h3>Plan</h3>
        <hr />
        <div>
          <Row>
            <Col>
              <div className="box">
                <span className="top">
                  <h1>Rs.20</h1>
                  <small>/day</small>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate("/upload");
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </Col>
            <Col>
              <div className="box">
                <span className="top">
                  <h1>Rs.100</h1>
                  <small>/7days</small>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate("/upload");
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </Col>
            <Col>
              <div className="box">
                <span className="top">
                  <h1>Rs.350</h1>
                  <small>/20days</small>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate("/upload");
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
