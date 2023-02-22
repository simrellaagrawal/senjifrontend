import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useLocation } from "react-router-dom";
import UserHome from "./UserHome";
import "./userpage.css";
export default function SingleProduct(props) {
  const location = useLocation();
  let data;

  return (
    <div>
      <UserHome />
      <div>
        <Container className="product">
          <Row>
            <Col lg={6}>
              <div className="product-img">
                <img src={location.state.data.image} />
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <h3>Seller Details</h3>
                <hr />
                <Row>
                  <Col lg={4} className="left">
                    <p>Name</p>
                    <p>Contact Number</p>
                    <p>Email</p>
                  </Col>
                  <Col lg={4} className="right">
                    <p>name</p>
                    <p>Contact Number</p>
                    <p>Email</p>
                  </Col>
                </Row>
              </div>
              <div className="product-details">
                <h3>Product Details</h3>
                <hr />

                <Row>
                  <Col lg={4} className="left">
                    <p>Product ID</p>
                    <p>Product Name</p>
                    <p>Brand</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>In Stock</p>
                    <p>Rating</p>
                    <p>For</p>
                    <p>Video</p>
                    <p>Document</p>
                  </Col>
                  <Col lg={4} className="right">
                    <p>{location.state.data.productId}</p>
                    <p>{location.state.data.name}</p>
                    <p>{location.state.data.brand}</p>
                    <p>{location.state.data.productCat}</p>
                    <p>{location.state.data.price}</p>
                    <p>{location.state.data.stock}</p>
                    <p>{location.state.data.rating}</p>
                    <p>{location.state.data.type}</p>
                    <p>{location.state.data.video}</p>
                    <p>{location.state.data.doc}</p>

                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
