import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./user-content.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BasicExample() {
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
    <>
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
    </>
  );
}

export default BasicExample;
