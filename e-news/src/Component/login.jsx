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
    <div className="auth-container">
      <div className="form-container">
        <h2>LOGIN PAGE</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn">Login</button>
          <p className="switch-link">
            Not registered? <button onClick={() => navigate("/register")} className="link-btn">Create an account</button>
          </p>
        </form>

        {/* Updated Go Back Button */}
        <div className="go-back">
          <button onClick={() => navigate("/home")} className="go-back-btn">GO BACK</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
