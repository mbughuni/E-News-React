import AdminNavbar from "./adminnavbar";
import { Outlet } from "react-router-dom";
import "./adminlayout.css"; // Import CSS for layout

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminNavbar /> {/* Navbar Only (No Sidebar) */}
      <main className="admin-main">
        <Outlet /> {/* Content Loads Here */}
      </main>
    </div>
  );
};

export default AdminLayout;
