//import React from 'react';
import axios from "axios";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://passwordresetbe-1.onrender.com/api/user/forgot-password", {
        email,
      })
      .then((res) => setResponseMsg(res.data.message))
      .catch((err) => setResponseMsg(err.response?.data?.message || "error"));
    setEmail("");
  };
  return (
    <div>
      {/* <h1>Forgot Password</h1> */}
      <div className="container">
        <div className="justify-content-center">
          <div className="col md-4">
            <div className="box  ">
              <div id="login-form" className="form-container active">
                <h3 className="text-center">Forgot Password</h3>
                <form onSubmit={handleSubmit}>
                  <label>Email </label>
                  <br></br>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control"
                  />

                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                  >
                    Send Reset Link
                  </button>
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

export default ForgotPassword;
