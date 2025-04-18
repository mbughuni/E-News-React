import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import Navbar from "./navbar";
import "../styles/updateprofile.css";

const ProfileUpdateForm = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    dob: "",
    image_url: null, // file object
    previewImage: "", // for preview only
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.email) return;

      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${user.email}`);
        const data = response.data;

        setFormData((prev) => ({
          ...prev,
          first_name: data.first_name || "",
          middle_name: data.middle_name || "",
          last_name: data.last_name || "",
          email: data.email || "",
          contact_number: data.contact_number || "",
          dob: data.dob ? data.dob.split("T")[0] : "",
          previewImage: data.profile_picture
            ? `http://localhost:5000/uploads/${data.profile_picture}`
            : "",
        }));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image_url" && files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        image_url: files[0],
        previewImage: URL.createObjectURL(files[0]), // show preview
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("first_name", formData.first_name);
    form.append("middle_name", formData.middle_name);
    form.append("last_name", formData.last_name);
    form.append("contact_number", formData.contact_number);
    form.append("dob", formData.dob);

    if (formData.image_url) {
      form.append("profilePicture", formData.image_url); // 👈 use correct field name expected by multer
    }

    try {
      const res = await axios.put(
        `http://localhost:5000/api/user/update/${formData.email}`,
        form,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Profile updated successfully");
      console.log("Updated:", res.data);
    } catch (err) {
      console.error("Update error:", err.response?.data || err.message);
      alert("Failed to update profile");
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleUpdate} className="profile-form">
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Middle Name:
          <input
            type="text"
            name="middle_name"
            value={formData.middle_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>
        <label>
          Profile Picture:
          <input
            type="file"
            name="image_url"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        {formData.previewImage && (
          <img
            src={formData.previewImage}
            alt="Profile Preview"
            style={{ width: "150px", marginTop: "10px", borderRadius: "8px" }}
          />
        )}

        <button type="submit" className="btn btn-secondary">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;
