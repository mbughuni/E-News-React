import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import CSS

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
  };

  return (
    <div className="login-container">
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
          <button onClick={() => navigate("/forgot-password")} className="link-btn">Forgot Password?</button>
          <button onClick={() => navigate("/register")} className="link-btn">Don&apos;t Have an Account?</button>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="go-back">
        <button onClick={() => navigate("/home")} className="go-back-btn">GO BACK</button>
      </div>
    </div>
  );
};

export default Login;
