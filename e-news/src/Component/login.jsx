import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";

import "./login.css";

const Login = () => {
  return (
    <div className="auth-container">
      <Navbar />
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn">Login</button>
          <p className="switch-link">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
