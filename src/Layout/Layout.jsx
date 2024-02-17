import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-black">
      <div>
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
