import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";

const Layout = () => {
  const loginStatus = useSelector((state) => state.auth.status);
  return loginStatus ? (
    <div className="flex min-h-screen bg-accentoffwhite">
      <div className="flex flex-col flex-1 overflow-y-auto">
      <div className="sticky top-0 z-50 bg-accentoffwhite p-4 flex items-center justify-around">
        <NavBar />
      </div>
      <Outlet />
      </div>
    </div>
  ) : (
    <Outlet />
  );
};

export default Layout;
