import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import CSS
import Navbar from "./navbar";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", credentials);

    // Simulating login success (you can replace this with actual authentication logic)
    setTimeout(() => {
      navigate("/home");
    }, 1000); // Delay added for better UX
  };

  return (
    <div>
      <Navbar></Navbar>
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to Your Account</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email Address:</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            className="login-input" 
            onChange={handleChange} 
            required 
          />

          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter your password" 
            className="login-input" 
            onChange={handleChange} 
            required 
          />

<div className="login-links">
  <span onClick={() => navigate("/forgot-password")} className="link-text">
    Forgot Password?
  </span>
  <span className="divider">|</span>
  <span onClick={() => navigate("/register")} className="link-text">
    Don&apos;t Have an Account?
  </span>
</div>


          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="go-back">
          <button onClick={() => navigate("/home")} className="go-back-btn">GO BACK</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;