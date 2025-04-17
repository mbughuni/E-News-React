import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext"; // Adjust the path
import axios from "axios";
import "../styles/updateprofile.css";


const ProfileUpdateForm = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    profession: "",
  });

  // ✅ Pre-fill input fields when user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        email: user.email || "",
        profession: user.profession || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/user/update/${user._id}`, formData);
      alert("Profile updated successfully");
      console.log("Updated:", res.data);
    } catch (err) {
      console.error("Update error:", err.response?.data || err.message);
      alert("Failed to update profile");
    }
  };

  return (
    <form onSubmit={handleUpdate} className="profile-form">
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Profession:
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileUpdateForm;
