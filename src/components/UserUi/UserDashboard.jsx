import React from "react";
import BasicExample from "./pages/RecipeReviewCard";
import UserHome from "./pages/UserHome";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../UserUi/pages/user-content.css";

export default function UserDashboard() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const res = await axios.get("/product/");
      const data = res.data;
      console.log(data);
      setDetails(data);
      setLoading(false);
    };
    fetchDetails();
  }, []);
  const handleClick = (detail) => {
    console.log("clicked");
    navigate("/single-product", {
      state: {
        data: detail,
      },
    });
  };

  return (
    <div>
      <UserHome />
      <div className="user-content">
        <Container fluid="lg">
          <Row>
            <Col lg={3}>
              {details?.map((detail) => {
                return (
                  <>
                    <div
                      className="product-box"
                      onClick={() => {
                        handleClick(detail);
                      }}
                    >
                      <img src={detail.image} />
                      <hr />
                      <h6>{detail.name}</h6>
                      <div className="details">
                        <div>
                          <p>For: {detail.type}</p>
                          <p>In Stock: {detail.stock}</p>
                        </div>
                        <div>
                          <p>Price: Rs.{detail.price}</p>
                          <p>seller rating: 7</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
