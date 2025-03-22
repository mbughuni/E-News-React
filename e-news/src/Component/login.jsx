import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Importing CSS

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", user);
    
    // Simulating login and redirect to home
    setTimeout(() => {
      navigate("/"); // Redirect to home page after login
    }, 500); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="options">
            <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
            <Link to="/register" className="register-link">Don&apos;t Have an Account?</Link>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
