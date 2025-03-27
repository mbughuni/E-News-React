import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminNavbar from "./adminnavbar";  
import "./totalusers.css";  

const TotalUsers = () => {
  const navigate = useNavigate(); // Navigation hook

  // Sample User Data (Can be replaced with API fetch data)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Asraf",
      address: "Gandhi Nagar",
      phone: "7781826301",
      email: "mail692@rku.ac.in",
      image: "https://via.placeholder.com/100",
      dob: "30-12-2002",
    },
    {
      id: 2,
      name: "John Doe",
      address: "New York, USA",
      phone: "9876543210",
      email: "john@example.com",
      image: "https://via.placeholder.com/100",
      dob: "15-06-1995",
    },
  ]);

  // Delete User Function
  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="dashboard">
      <AdminNavbar />  

      <div className="total-users">
        <h1>Total Users</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Images</th>
              <th>DOB</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.image} alt="User" className="user-image" />
                </td>
                <td>{user.dob}</td>
                <td>
                  <button className="edit-button">
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                </td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(user.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

     {/* Go Back Button */}
     <button className="go-back-button" onClick={() => navigate(-1)}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default TotalUsers;
