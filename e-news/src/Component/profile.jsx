import { useEffect, useState } from "react";
import "../styles/profile.css";
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
    imageUrl: ""
  });
  const [originalProfile, setOriginalProfile] = useState({});
  const [news, setNews] = useState([]);
  const [isLoadingNews, setIsLoadingNews] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ Fetch profile and news by email
  useEffect(() => {
    const fetchProfileAndNews = async () => {
      if (!user?.email) return;

      try {
        const response = await fetch(`http://localhost:5000/api/profile/${user.email}`);
        const data = await response.json();

        if (response.ok) {
          const updatedProfile = {
            firstName: data.profile.first_name,
            middleName: data.profile.middle_name,
            lastName: data.profile.last_name,
            email: data.profile.email,
            phone: data.profile.contact_number,
            dob: data.profile.dob,
            imageUrl: data.profile.image_url || "/assets/A3.png",
          };

          setProfile(updatedProfile);
          setOriginalProfile(updatedProfile);
          setNews(data.news);
        } else {
          console.error("Failed to fetch profile:", data.message);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoadingNews(false);
      }
    };

    fetchProfileAndNews();
  }, [user]);

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Save profile changes
  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/profile/${user.email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: profile.firstName,
          middle_name: profile.middleName,
          last_name: profile.lastName,
          contact_number: profile.phone,
          dob: profile.dob,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setIsEditing(false);
        setOriginalProfile(profile);
      } else {
        console.error("Failed to update profile:", result.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />
      <ProfileHeader />

      <div className="main-content">
        <div className="profile-container">
          {/* Profile Section */}
          <div className="profile-content">
            <div className="image-section">
              <img src={profile.imageUrl} alt="Profile" />
              {!isEditing && (
                <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
              )}
            </div>

            <div className="details-container">
              <div className="profile-details">
                <h3>Profile Details</h3>
                {["firstName", "middleName", "lastName", "email", "phone", "dob"].map((field) => (
                  <div className="detail-item" key={field}>
                    <span className="label">{field.charAt(0).toUpperCase() + field.slice(1)}</span>
                    {isEditing && field !== "email" ? (
                      <input
                        type={field === "dob" ? "date" : "text"}
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
                <div className="detail-item"><span className="label">Email</span><span className="value">{profile.email}</span></div>
                <div className="detail-item"><span className="label">Phone</span><span className="value">{profile.phone}</span></div>
                <div className="detail-item"><span className="label">Password</span><span className="value">********</span></div>
                <button type="button" className="changepassword">Change Password</button>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="news-section">
            <h3>Your News ({news.length})</h3>
            <div className="news-list">
              {isLoadingNews ? (
                <p>Loading news...</p>
              ) : news.length > 0 ? (
                news.map((article, index) => (
                  <div key={index} className="news-item">
                    <div className="author-info">
                      <img
                        src={article.image_url || "/assets/A3.png"}
                        alt="News"
                        className="author-image"
                      />
                      <p className="author-name">{profile.firstName} {profile.lastName}</p>
                    </div>
                    <h4>{article.title}</h4>
                    <p>{article.content}</p>
                    <p className="meta">🗓 {new Date(article.created_at).toLocaleDateString()} | 💬 {article.comment_count} | ❤️ {article.like_count}</p>
                  </div>
                ))
              ) : (
                <p>No news found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
