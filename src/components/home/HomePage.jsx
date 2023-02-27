import React from "react";
import HomeNav from "./HomeNav";
// import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
export default function HomePage() {
  return (
    <div className="home-page">
      <HomeNav />
      <div className="info">
        <Alert variant="light">
          <Alert.Heading>Any Information</Alert.Heading>
          <p>Aww yeah, you successfully read this important alert message.</p>
          <hr />
          <p className="mb-0">Have a Nice Day</p>
        </Alert>
      </div>
      <div className="bottom">
          <Carousel>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src="https://images.idgesg.net/images/article/2018/12/apple-products-2018-100782368-large.3x2.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src="https://i1.wp.com/www.funkykit.com/wp-content/uploads/2017/01/img_0001.png?fit=1450%2C1006&ssl=1"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src="https://images.idgesg.net/images/article/2020/01/apple-product-family-2020-100827854-large.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
      </div>
    </div>
  );
}
