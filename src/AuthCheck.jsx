import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthCheck = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.status);

  return isAuthenticated ? children : <Navigate to="/login/customer" />;
};

export default AuthCheck;
