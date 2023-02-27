import React from "react";
import Container from "react-bootstrap/esm/Container";
import HomeNav from "../home/HomeNav";
import "./about.css";
export default function About() {
  return (
    <div>
      <HomeNav />
      <Container className="about">
        <h3>About Us</h3>
        <hr/>
        <p></p>
      </Container>
    </div>
  );
}
