import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useLocation } from "react-router-dom";
import UserNav from "./UserNav";
import "./userpage.css";
export default function SingleProduct(props) {
  const location = useLocation();
  let data;

  return (
    <div>
      <UserNav />
      <div>
        <Container className="product">
          <Row>
            <Col lg={4} md={6}>
              <div className="product-img">
                <img src={location.state.data.image} />
              </div>
            </Col>

            <Col lg={4}  md={6} sm={12} className="middle">
              <div>
                <h3>Seller Details</h3>
                <hr />
                <Row>
                  <Col lg={4} sm={6} md={6} className="left">
                    <p>Name</p>
                    <p>Phone No.</p>
                    <p>Email</p>
                  </Col>
                  <Col lg={5} sm={6} md={6} className="right">
                    <p>name</p>
                    <p>123456789012</p>
                    <p>Email</p>
                  </Col>
                </Row>
              </div>
              <div className="product-details">
                <h3>Product Details</h3>
                <hr />
                <Row>
                  <Col lg={4} sm={6}  className="left">
                    <p>Product ID</p>
                    <p>Name</p>
                    <p>Brand</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>In Stock</p>
                    <p>Rating</p>
                    <p>For</p>
                  </Col>
                  <Col lg={5} sm={6}  className="right">
                    <p>{location.state.data.productId}</p>
                    <p>{location.state.data.name}</p>
                    <p>{location.state.data.brand}</p>
                    <p>{location.state.data.productCat}</p>
                    <p>{location.state.data.price}</p>
                    <p>{location.state.data.stock}</p>
                    <p>{location.state.data.rating}</p>
                    <p>{location.state.data.type}</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4}>
              <Row>
                <Col lg={3} className="left">
                  <p>Video</p>
                  <iframe src={location.state.data.video} />
                  <p>Document</p>
                  <embed src={location.state.data.doc} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
