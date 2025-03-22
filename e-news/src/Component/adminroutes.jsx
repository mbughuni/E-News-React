import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./adminnavbar";
import AdminDashboard from "./admindashboard";
import AddedNews from "./AddedNews";
import AvailableReviews from "./AvailableReviews";
import AvailableUsers from "./AvailableUsers";
import AddNews from "./AddNews";
import AvailableNews from "./AvailableNews";
import AddUsers from "./AddUsers";

const AdminRoutes = () => {
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="added-news" element={<AddedNews />} />
        <Route path="reviews" element={<AvailableReviews />} />
        <Route path="available-users" element={<AvailableUsers />} />
        <Route path="add-news" element={<AddNews />} />
        <Route path="available-news" element={<AvailableNews />} />
        <Route path="add-user" element={<AddUsers />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
