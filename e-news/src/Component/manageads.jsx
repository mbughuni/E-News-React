import { useState } from "react";
import "./manageads.css";

const ManageAds = () => {
  const [ads, setAds] = useState([
    { id: 1, title: "Ad 1", status: "Active" },
    { id: 2, title: "Ad 2", status: "Inactive" },
    { id: 3, title: "Ad 3", status: "Active" },
  ]);

  const toggleStatus = (id) => {
    setAds((prevAds) =>
      prevAds.map((ad) =>
        ad.id === id ? { ...ad, status: ad.status === "Active" ? "Inactive" : "Active" } : ad
      )
    );
  };

  const deleteAd = (id) => {
    setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
  };

  return (
    <div className="manage-ads-container">
      <h2>Manage Ads</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad) => (
            <tr key={ad.id}>
              <td>{ad.id}</td>
              <td>{ad.title}</td>
              <td className={ad.status.toLowerCase()}>{ad.status}</td>
              <td>
                <button onClick={() => toggleStatus(ad.id)} className="toggle-btn">
                  {ad.status === "Active" ? "Deactivate" : "Activate"}
                </button>
                <button onClick={() => deleteAd(ad.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAds;
