import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";

import "./register.css";

const Register = () => {
  return (
    <div className="auth-container">
      <Navbar />
      <div className="form-container">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <button type="submit" className="btn">Register</button>
          <p className="switch-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
      
    </div>
  );
};

export default Register;
