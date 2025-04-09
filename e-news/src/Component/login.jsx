import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Ensure this import exists

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
      window.location.reload(); // Refresh to update navbar
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            className="login-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password" 
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="login-links">
          <span className="link-text">Forgot Password?</span>
          <span className="divider">|</span>
          <span className="link-text" onClick={() => navigate("/register")}>
            Register
          </span>
        </div>

        <div className="go-back">
          <button className="go-back-btn" onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
