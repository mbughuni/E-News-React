import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/EditReviewPage.css";

const EditReviewPage = () => {
  const { id } = useParams(); // Review ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    review: "",
    name: "",
    profession: "",
    email: "", // Optional for validation
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);

  // Fetch existing review data
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`/reviews/${id}`);
        const data = response.data;
        setFormData({
          review: data.review,
          name: data.name,
          profession: data.profession,
          email: data.email || "", // if email is returned
          image: null, // image won't be edited here directly
        });
        setPreviewImage(`/uploads/${data.image}`);
      } catch (error) {
        console.error("Failed to fetch review", error);
      }
    };

    fetchReview();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
    setPreviewImage(URL.createObjectURL(file));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("review", formData.review);
    data.append("name", formData.name);
    data.append("profession", formData.profession);
    data.append("email", formData.email);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      await axios.put(`/reviews/${id}`, data);
      alert("Review updated successfully!");
      navigate("/admin/reviews"); // redirect to reviews list
    } catch (error) {
      console.error("Failed to update review", error);
      alert("Error updating review.");
    }
  };

  return (
    <div className="container max-w-xl mx-auto mt-10 p-5 border rounded shadow">
      <h2 className="text-2xl font-bold mb-5">Edit Review</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <div>
          <label className="block">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block">Profession:</label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block">Review:</label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block">Image (optional):</label>
          <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
          {previewImage && <img src={previewImage} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Update Review
        </button>
      </form>
    </div>
  );
};

export default EditReviewPage;
