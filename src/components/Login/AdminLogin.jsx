import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../../redux/authSlice";
import HomeNav from "../home/HomeNav";
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      axios
        .post("http://localhost:5000/api/auth/admin-login", {
          email: email,
          password: password,
        })
        .then((response) => {
          navigate("/admin-dashboard");
        });
      const admin = { email: email, password: password };
      dispatch(loginSuccess(admin));

      // if login fails, dispatch loginFailure action with error message
      const error = "Invalid email or password";
      dispatch(loginFailure(error));

      setEmail("");
      setPassword("");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <HomeNav />
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
