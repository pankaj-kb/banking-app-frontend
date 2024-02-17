import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";

const Layout = () => {
  const loginStatus = useSelector((state) => state.auth.status);
  return loginStatus ? (
    <div className="flex min-h-screen bg-accentoffwhite">
      <div className="flex justify-center items-center">
        <NavBar />
      </div>
      <Outlet />
    </div>
  ) : (
    <Outlet />
  );
};

export default Layout;
