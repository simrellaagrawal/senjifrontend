import React from "react";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import Container from "react-bootstrap/Container";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../UserUi/pages/user-content.css";
import UserNav from "./pages/UserNav";
import UserFooter from "./pages/UserFooter";
import Card from "./Category/Card";
import ProductCard from "./pages/ProductCard";

export default function UserDashboard() {
  // const [details, setDetails] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     setLoading(true);
  //     await axios.get("http://localhost:5000/api/product/").then((response) => {
  //       const result = response.data;
  //       console.log(result);
  //       setDetails(result);
  //     });

  //     setLoading(false);
  //   };
  //   fetchDetails();
  // }, []);
  // const handleClick = (detail) => {
    // console.log("clicked");
  //   navigate("/single-product", {
  //     state: {
  //       data: detail,
  //     },
  //   });
  // };

  return (
    <div>
      <UserNav />
      <div className="user-content">
        <Card />

        <ProductCard />
      </div>
      <UserFooter />
    </div>
  );
}
