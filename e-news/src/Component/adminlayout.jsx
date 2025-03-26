import AdminNavbar from "./adminnavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminNavbar /> {/* Fixed Navbar for Admin */}
      <main className="admin-main">
        <Outlet /> {/* Admin content will load here */}
      </main>
    </div>
  );
};

export default AdminLayout;
