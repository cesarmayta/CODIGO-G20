import { AdminContent } from "../../common/AdminContent/AdminContent";
import { AdminSidebar } from "../../common/AdminSidebar/AdminSidebar";
import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../../../services/authServices";
import "./AdminLayout.scss";

export const AdminLayout = () => {
  const isAuthenticated = isAuth();

  // if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="Admin-layout">
      <AdminSidebar />
      <AdminContent>
        <Outlet />
      </AdminContent>
    </div>
  );
};
