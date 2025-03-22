import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css"; // Import CSS

const Register = () => {
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
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering User:", formData);
  };

  return (
    <div className="register-container">
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

        {/* Email Row (Full Width) */}
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

      {/* Go Back Link */}
      <div className="go-back">
        <Link to="/">GO BACK</Link>
      </div>
    </div>  
  );
};

export default Register;
