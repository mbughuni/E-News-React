import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    alert("Reset link sent to your email!");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", textAlign: "center", width: "300px" }}>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <button type="submit" style={{ width: "100%", padding: "10px", background: "#d15920", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Send Reset Link
          </button>
        </form>
        <button onClick={() => navigate("/login")} style={{ marginTop: "10px", background: "none", border: "none", color: "#333", cursor: "pointer" }}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
