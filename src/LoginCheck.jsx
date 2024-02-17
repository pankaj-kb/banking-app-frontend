import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginCheck = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.status);

  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default LoginCheck;
