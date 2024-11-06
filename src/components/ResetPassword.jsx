/* eslint-disable no-unused-vars */
//import React from 'react';
import axios from "axios";
import { useState } from "react";
//import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResertPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [searchParams] = useSearchParams();
  //const { token } = useParams();
  const token = searchParams.get("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return setResponseMsg("password should be at least 6 characters");
    }
    if (password !== confirmPassword) {
      return setResponseMsg("password do not match");
    }
    try {
      const res = await axios.post(
        "https://passwordresetbe-2.onrender.com/api/user/reset-password",
        {
          token,
          password,
        }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error");
    }
  };

  return (
    <div>
      {/* <h1>Reser Password</h1> */}
      <div className="container">
        <div className="justify-content-center">
          <div className="col md-4">
            <div className="box  ">
              <div id="login-form" className="form-container active">
                <h3 className="text-center">Reset Password</h3>
                <form onSubmit={handleSubmit}>
                  <label>New Password </label>
                  <br></br>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-control"
                  />
                  <br></br>
                  <label>Confirm Password </label>
                  <br></br>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="form-control"
                  />

                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default ResertPassword;
