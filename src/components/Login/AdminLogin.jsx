import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      axios
        .post("/auth/admin-login", {
          email: email,
          password: password,
        })
        .then((response) => {
          navigate("/admin-dashboard");
        });
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <div className="login">
        <div className="box">
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="outline">
              Sign In
            </Button>
            <p>
              <a href="#">Forgot Password?</a>
            </p>
          </form>
        </div>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}
      </div>
      <footer>
        <p> Client Management System @2021 </p>
      </footer>
    </>
  );
}
