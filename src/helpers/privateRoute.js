import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const authState = useSelector((state) => state.auth);

  return authState.loggedIn.state ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
