import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";

const Layout = () => {
  const loginStatus = useSelector((state) => state.auth.status);
  return loginStatus ? (
    <div className="flex h-screen bg-accentoffwhite">
      <div className="flex flex-col overflow-y-auto">
        <div
          className="sticky top-0 z-50 bg-accentoffwhite flex flex-col gap-12
      lg:flex-row lg:gap-[50%] lg:items-center lg:justify-center"
        >
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
