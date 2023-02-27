import "./user-content.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function ProductCard() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/product/");
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
    <>
      <Container fluid="lg" id="p-card">
      <h3>Products</h3>
        <hr className="hr" />
        <Row>
          {details &&
            details.map &&
            details.map((detail) => {
              return (
                <>
                  <Col lg={3} md={4} sm={6} key={detail._id}>
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
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default ProductCard;
