//import React from 'react';
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  //const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://passwordresetbe-2.onrender.com/api/user/forgot-password", {
        email,
      })
      .then((res) => {toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login"); 
        }, 3000);
      })
      .catch((err) => toast.error(err.response?.data?.message || "Error"));
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
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default ForgotPassword;
