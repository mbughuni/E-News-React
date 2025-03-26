import { useState } from "react";
import "./adminprofile.css"; // Import CSS file

const AdminProfile = () => {
  const [adminData, setAdminData] = useState({
    name: "John Doe",
    email: "admin@enews.com",
    role: "Administrator",
    bio: "Managing the E-News platform and ensuring quality content.",
    profileImage: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdminData({ ...adminData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>Admin Profile</h2>
      <div className="profile-card">
        {/* Profile Image */}
        <div className="profile-image">
          <img src={adminData.profileImage || "https://via.placeholder.com/150"} alt="Admin" />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        {/* Admin Info */}
        <div className="profile-details">
          <label>Full Name</label>
          <input type="text" name="name" value={adminData.name} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" value={adminData.email} onChange={handleChange} disabled />

          <label>Role</label>
          <input type="text" name="role" value={adminData.role} disabled />

          <label>Bio</label>
          <textarea name="bio" value={adminData.bio} onChange={handleChange}></textarea>
        </div>

        {/* Change Password Section */}
        <div className="password-section">
          <h3>Change Password</h3>
          <label>New Password</label>
          <input type="password" name="newPassword" onChange={handleChange} />
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" onChange={handleChange} />
        </div>

        {/* Save Button */}
        <button className="save-button" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default AdminProfile;
