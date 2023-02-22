import React from "react";
import Nav from "react-bootstrap/Nav";
import "./home.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
export default function Home() {
  return (
    <Row>
      <Col lg={2} id="spy">
        <div className="home">
          <div className="top">
            <p> Sen ji</p>
          </div>
          <div className="middle">
            <Button variant="light" className="">
              Home
            </Button>

            <Button variant="success">
              <a href="#">about us</a>
            </Button>

            <Button variant="success">
              <a href="/admin-login">admin login</a>
            </Button>

            <Button variant="success">
              <a href="/login">customer login</a>
            </Button>

            <Button variant="success">
              <a href="/register">register here</a>
            </Button>

            <Button variant="success">
              <a href="#">contact us</a>
            </Button>

            <Button variant="success">
              <a href="#">terms & conditions</a>
            </Button>
          </div>
        </div>
      </Col>
      <Col id="content" lg={10}>
        <Row>
          <Container id="slider">
            <p>RENTING</p>
            <hr/>
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>

                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                {/* double it */}
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>

                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
              </div>
            </div>
          </Container>
        </Row>
        <Row>
          <Container id="slider">
            <p>SEllING</p>
            <hr/>
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>

                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                {/* double it */}
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>

                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
                <div className="slide">
                  <img src="https://www.afcinternationalllc.com/wp-content/uploads/2016/07/AFC-Importing-Electronics-1-7-7-16.jpg" />
                </div>
              </div>
            </div>
          </Container>
        </Row>
      </Col>
    </Row>
  );
}
