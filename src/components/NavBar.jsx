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
    console.log(response);
    dispatch(logout());
  };

  return (
    <>
      <Logo
        className={
          "absolute top-[5%] text-[50px] hover:cursor-pointer text-accentpurple font-semibold"
        }
      />
      <div className="flex gap-[100px] items-center text-center">
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
