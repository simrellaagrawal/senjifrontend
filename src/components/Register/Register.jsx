import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import "../Login/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      axios
        .post("/auth/register", {
          username: username,
          phone: phone,
          email:email,
          otp: otp,
        })
        .then((response) => {
          navigate("/");
        });
      setUsername("");
      setPhone("");
      setEmail("");
      setOtp("");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <div className="login register">
        <div className="box">
          <h3>Registration</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username"
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value);
            }}
             required />
            <input type="number" placeholder="Phone number"
             value={phone}
             onChange={(e)=>{
               setPhone(e.target.value);
             }} required />
            <input type="email" placeholder="Email(optional)" 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            required />
            <input type="checkbox" id="t&c" name="t&c" required />
            <label for="t&c"> Terms & Conditions</label>
            <br />
            <Button
              onClick={() => {
                setShow(true);
              }}
              variant="outline"
            >
              Register
            </Button>
            <Button variant="outline">
              <a href="/login" className="link">
                Login
              </a>
            </Button>
            {show && (
              <div>
                <input type="number" placeholder="Enter OTP"
                value={otp}
                onChange={(e)=>{
                  setOtp(e.target.value);
                }}
                />
                <Button variant="outline" type="submit">Verify</Button>
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
        <p> Client Management System @2021 </p>
      </footer>
    </>
  );
}
