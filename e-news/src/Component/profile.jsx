import { useEffect, useState } from "react";
import '../styles/profile.css';
import Navbar from "./navbar";
import ProfileHeader from "./profileheader";

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [originalProfile, setOriginalProfile] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user?.email) return;

      try {
        const response = await fetch(`http://localhost:5000/api/profile/${user.email}`);
        const data = await response.json();
        if (response.ok) {
          const updatedProfile = {
            firstName: data.first_name,
            middleName: data.middle_name,
            lastName: data.last_name,
            email: data.email,
            phone: data.contact_number,
            dob: data.dob,
          };
          setProfile(updatedProfile);
          setOriginalProfile(updatedProfile);
        } else {
          console.error("Failed to fetch user profile:", data.message);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/profile/update/${user.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: profile.firstName,
          middle_name: profile.middleName,
          last_name: profile.lastName,
          email: profile.email,
          contact_number: profile.phone,
          dob: profile.dob,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setIsEditing(false);
        setOriginalProfile(profile);
        console.log("Profile updated:", result.message);
      } else {
        console.error("Failed to update profile:", result.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {
    setProfile(originalProfile); // Reset to last saved state
    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />
      <ProfileHeader />
      <div className="main-content">
        <div className="profile-container" style={{ marginTop: '285px' }}>
          <div className="profile-content">
            <div className="image-section">
              <img src="/assets/A3.png" alt="Profile" />
              {!isEditing && (
                <button className="edit-button" onClick={() => setIsEditing(true)}>
                  Edit
                </button>
              )}
            </div>

            <div className="details-container">
              <div className="profile-details">
                <h3>Profile Details</h3>
                {["firstName", "middleName", "lastName", "email", "phone", "dob"].map((field) => (
                  <div className="detail-item" key={field}>
                    <span className="label">{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                    {isEditing ? (
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={profile[field]}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span className="value">{profile[field]}</span>
                    )}
                  </div>
                ))}

                {isEditing && (
                  <div className="action-buttons">
                    <button className="save-button" onClick={handleSave}>Save</button>
                    <button className="cancel-button" onClick={handleCancel}>Cancel</button>
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
    </div>
  );
};

export default ProfileForm;
