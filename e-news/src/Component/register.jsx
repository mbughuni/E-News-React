import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css"; // Import CSS
import Navbar from "./navbar";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Handle file uploads separately
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare form data for submission
    const userData = new FormData();
    Object.keys(formData).forEach((key) => {
      userData.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        body: userData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        navigate("/login"); // Redirect to login page
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="register-container">
        <div className="register-box">
        <h2>REGISTRATION PAGE</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className="three-column">
            <div>
              <label>First Name</label>
              <input type="text" name="firstName" onChange={handleChange} required />
            </div>
            <div>
              <label>Middle Name</label>
              <input type="text" name="middleName" onChange={handleChange} />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" name="lastName" onChange={handleChange} required />
            </div>
          </div>

          {/* Contact & Address Row */}
          <div className="two-column">
            <div>
              <label>Contact Number</label>
              <input type="tel" name="contactNumber" onChange={handleChange} required />
            </div>
            <div>
              <label>Address</label>
              <input type="text" name="address" onChange={handleChange} required />
            </div>
          </div>

          {/* Email Row */}
          <div className="full-width">
            <label>Email Address</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>

          {/* Password & Confirm Password Row */}
          <div className="two-column">
            <div>
              <label>Password</label>
              <input type="password" name="password" onChange={handleChange} required />
            </div>
            <div>
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" onChange={handleChange} required />
            </div>
          </div>

          {/* Date of Birth & Gender Row */}
          <div className="two-column">
            <div>
              <label>Date of Birth</label>
              <input type="date" name="dob" onChange={handleChange} required />
            </div>
            <div>
              <label>Gender</label>
              <select name="gender" onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* File Upload Row */}
          <div className="full-width">
            <label>Profile Picture</label>
            <input type="file" name="profilePicture" className="file-upload" onChange={handleChange} />
          </div>

          {/* Register Button */}
          <button type="submit" className="register-btn">Register</button>
        </form>

        {/* Go Back Button */}
        <div className="go-back">
          <button onClick={() => navigate("/home")} className="go-back-btn">GO BACK</button>
        </div>
      </div>  
        </div>
        
    </div>
  );
};

export default Register;
