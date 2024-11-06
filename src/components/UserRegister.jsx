import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [responseMsg, setResponseMsg] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("register api payloads", userName, email, password, role);
    const payloads = { userName, email, password, role };
    await axios
      .post("http://localhost:4000/api/user/register", payloads)
      .then((res) => setResponseMsg(res.data.message))
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
    setUserName("");
    setRole("");
    //setResponseMsg("");
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      {/* <h1>Register Comp</h1> */}
      <div className="container">
        <div className="justify-content-center">
          <div className="col md-4">
            <div className="box  ">
              <div id="login-form" className="form-container active">
                <h3 className="text-center">Sign Up</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>UserName </label> <br></br>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                      className="form-control"
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label>Email </label> <br></br>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-control"
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label>Password</label> <br></br>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-control"
                    />
                  </div>
                  <br></br>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                  >
                    Register
                  </button>
                  <p className="mt-3 text-center">
                    Already have an account?{" "}
                    <a href="" onClick={handleLogin}>
                      Login
                    </a>
                  </p>
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

export default UserRegister;
