import { useState } from "react";
import '../styles/profile.css'; // Ensure the path is correct
import Navbar from "./navbar";
import ProfileHeader from "./profileheader";
// import Footer from "./footer";

const ProfileForm = () => {
  // State for edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State for profile details
  const [profile, setProfile] = useState({
    firstName: "MD ASRAF ALI",
    middleName: "ASRAF",
    lastName: "DOR",
    email: "male978@vlu.ac.in",
    phone: "7781826301",
    dob: "30-12-2002",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle save
  const handleSave = () => {
    setIsEditing(false);
    // You can add logic here to save the updated profile data to an API or state management
    console.log("Profile saved:", profile);
  };

  // Handle cancel
  const handleCancel = () => {
    setIsEditing(false);
    // Reset the profile data to its original state (optional)
    setProfile({
      firstName: "MD ASRAF ALI",
      middleName: "ASRAF",
      lastName: "DOR",
      email: "male978@vlu.ac.in",
      phone: "7781826301",
      dob: "30-12-2002",
    });
  };

  return (
    <div>
      <Navbar />
      <ProfileHeader />
      <div className="main-content"> {/* Wrap main content in a div */}
        <div className="profile-container" style={{ marginTop: '285px' }}> {/* Added margin-top */}
          <div className="profile-content">
            <div className="image-section">
              <img src="/assets/A3.png" alt="Profile" />
              <button className="edit-button" onClick={() => setIsEditing(true)}>
                Edit
              </button>
            </div>

            <div className="details-container">
              <div className="profile-details">
                <h3>Profile Details</h3>
                <div className="detail-item">
                  <span className="label">First Name</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="firstName"
                      value={profile.firstName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="value">{profile.firstName}</span>
                  )}
                </div>
                <div className="detail-item">
                  <span className="label">Middle Name</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="middleName"
                      value={profile.middleName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="value">{profile.middleName}</span>
                  )}
                </div>
                <div className="detail-item">
                  <span className="label">Last Name</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="lastName"
                      value={profile.lastName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="value">{profile.lastName}</span>
                  )}
                </div>
                <div className="detail-item">
                  <span className="label">Email</span>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="value">{profile.email}</span>
                  )}
                </div>
                <div className="detail-item">
                  <span className="label">Phone</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="value">{profile.phone}</span>
                  )}
                </div>
                <div className="detail-item">
                  <span className="label">Date of Birth</span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="dob"
                      value={profile.dob}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="value">{profile.dob}</span>
                  )}
                </div>

                {/* Save and Cancel buttons */}
                {isEditing && (
                  <div className="action-buttons">
                    <button className="save-button" onClick={handleSave}>
                      Save
                    </button>
                    <button className="cancel-button" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="login-details">
                <h3>Login Details</h3>
                <div className="detail-item">
                  <span className="label">Email</span>
                  <span className="value">{profile.email}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Phone</span>
                  <span className="value">{profile.phone}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Password</span>
                  <span className="value">********</span>
                </div>
                <button type="button" className="changepassword">Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> Footer added at the end */}
    </div>
  );
};

export default ProfileForm;