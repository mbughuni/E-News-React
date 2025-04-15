import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Admin shortcut login
    if (email === "admin" && password === "123") {
      const adminUser = {
        email: "admin",
        role: "admin",
        first_name: "Admin",
      };
      localStorage.setItem("user", JSON.stringify(adminUser));
      localStorage.setItem("token", "admin-token");

      toast.success("Admin login successful!", { position: "top-center" });

      setTimeout(() => {
        navigate("/admin");
        window.location.reload();
      }, 1500); // Delay to allow toast to show
      return;
    }

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
      localStorage.setItem("userId", data.user.id); // Store the userId after login

     

      toast.success("Login successful!", { position: "top-center" });

      setTimeout(() => {
        if (data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
        window.location.reload();
      }, 1500);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="text"
            className="login-input"
            placeholder="Enter your email or 'admin'"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            className="login-input"
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
