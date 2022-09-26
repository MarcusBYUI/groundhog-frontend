import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const AdminRoute = () => {
  const authState = useSelector((state) => state.auth);

  return authState.loggedIn.user.level === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoute;
