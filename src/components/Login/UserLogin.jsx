import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export default function UserLogin() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // const user = useSelector((state) => state.user.login);
    // const dispatch = useDispatch();
    e.preventDefault();
    setError(false);
    try {
      axios
        .post("/auth/login", {
          username: username,
          phone: phone,
          otp: otp,
        })
        .then((response) => {
          navigate("/dashboard");
        });
      setUsername("");
      setPhone("");
      setOtp("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="login">
        {/* <h1>User Login</h1> */}
        <div className="box">
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Phone number"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                axios.post("/auth/verify");
                setShow(true);
                navigate("/dashboard");
              }}
              variant="outline"
            >
              Sign In
            </Button>
            {show && (
              <div>
                <input
                  type="number"
                  placeholder="Enter OTP"
                  required
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                />
                <Button variant="outline" type="submit">
                  Verify
                </Button>
              </div>
            )}
          </form>
        </div>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}
      </div>
      <footer>
        <p> Client Management System @2021</p>
      </footer>
    </>
  );
}
