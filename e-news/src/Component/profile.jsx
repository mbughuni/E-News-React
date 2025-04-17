import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/profile.css";
import Navbar from "./navbar";
import ProfileHeader from "./profileheader";
import { useAuth } from "./AuthContext"; // 


const ProfileForm = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    imageUrl: ""
  });

  const { user } = useAuth(); // 

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.email) return;

      try {
        const response = await fetch(`http://localhost:5000/api/profile/${user.email}`);
        const data = await response.json();

        if (response.ok) {
          setProfile({
            firstName: data.first_name,
            middleName: data.middle_name,
            lastName: data.last_name,
            email: data.email,
            phone: data.contact_number,
            dob: data.dob,
            imageUrl: data.image_url 
              ? `http://localhost:5000/uploads/${data.image_url}` 
              : "/assets/A3.png",
          });
          
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [user]);

  return (
    <div>
      <Navbar />
      <ProfileHeader />

      <div className="main-content">
        <div className="profile-container">
          {/* Left Column */}
          <div className="left-column">
            <div className="profile-image">
              <img src={profile.imageUrl} alt="Profile" />
            </div>

            <div className="navigation-buttons">
              <Link to="/news" className="nav-button">
                <i className="fas fa-newspaper"></i>
                <span>News</span>
              </Link>
              <Link to="/edit-profile" className="nav-button">
                <i className="fas fa-edit"></i>
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="user-details">
              <h2>User Information</h2>
              <div className="detail-item">
                <label>First Name:</label>
                <span>{profile.firstName}</span>
              </div>
              <div className="detail-item">
                <label>Middle Name:</label>
                <span>{profile.middleName}</span>
              </div>
              <div className="detail-item">
                <label>Last Name:</label>
                <span>{profile.lastName}</span>
              </div>
              <div className="detail-item">
                <label>Email:</label>
                <span>{profile.email}</span>
              </div>
              <div className="detail-item">
                <label>Phone:</label>
                <span>{profile.phone}</span>
              </div>
              <div className="detail-item">
                <label>Date of Birth:</label>
                <span>{profile.dob ? new Date(profile.dob).toLocaleDateString() : ""}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
