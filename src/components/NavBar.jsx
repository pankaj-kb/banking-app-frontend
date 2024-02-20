import axios from "../axiosConfig.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import Logo from "./Logo";

const NavBar = () => {
  const userData = useSelector((state) => state.auth.userData);
  console.log(userData);
  const userType = useSelector((state) => state.auth.role);
  console.log(userType);

  const dispatch = useDispatch();
  // useEffect(() => {

  // }, [])

  const handleLogout = async () => {
    const response = await axios.post(`/${userType}/logout`, {});
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    console.log(response);
    dispatch(logout());
  };

  return (
    <>
      <Logo
        className={
          "absolute top-[2%] text-[40px] hover:cursor-pointer text-accentpurple font-semibold lg:top-[5%] lg:left-[5%] lg:text-[50px]"
        }
      />
      <div className="flex flex-col lg:flex-row items-center text-center gap-4 lg:pt-4">
        <h1 className="font-medium text-[20px] text-accentpurple hover:cursor-pointer">
          Hello, {userData.fullName} ({userType})
        </h1>
        <button
          className="p-2 font-medium text-accentwhite text-[20px] bg-accentpurple rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default NavBar;
