/* eslint-disable react/no-unescaped-entities */
//import React from 'react';
import { useState } from "react";
import axios from "axios";
import "./Style.css";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */

const UserLogin = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  //const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login api payloads", email, password);
    const payloads = { email, password };
    await axios
      .post("http://localhost:4000/api/user/login", payloads)
      .then((res) => {
        setResponseMsg(res.data.message);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
        setResponseMsg(err.response.data.message); //default structure for err msg
      });
    setEmail("");
    setPassword("");
  };

  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      {/* <h1>Login Comp</h1> */}
      <div className="container">
        <div className="justify-content-center">
          <div className="col md-4">
            <div className="box  ">
              <div id="login-form" className="form-container active">
                <h3 className="text-center">Log In</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email</label>
                    <br></br>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-control"
                    />

                    <br></br>
                    <label>Password </label>
                    <br></br>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-control"
                    />

                    <br></br>
                    <div className="mb-3">
                      <a href="" onClick={handleForgotPassword}>
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-3"
                    >
                      Login
                    </button>
                    <p className="mt-3 text-center">
                      Don't have an account?{" "}
                      <a href="" onClick={handleRegister}>
                        Sign up
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>{responseMsg}</h1>
    </div>
  );
};

export default UserLogin;
