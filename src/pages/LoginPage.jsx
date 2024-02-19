import axios from "../axiosConfig.js";
import { useState } from "react";
import Logo from "../components/Logo";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setRole } from "../features/authSlice.js";
import Cookies from "universal-cookie";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputClass = `h-[50px] bg-accentgray text-accentwhite rounded-[10px] border-[2px] border-accentgray
  w-[100%] text-center text-[20px] focus:outline-none
    hover:cursor-pointer`;
  const buttonClass = `h-[50px] bg-accentpurple text-accentwhite rounded-[10px] border-[2px] border-accentgray
  w-[100%] text-center text-[20px] focus:outline-none
    hover:cursor-pointer`;

  const [buttonText, setButtonText] = useState("Login");

  const { userType } = useParams();

  const [loginError, setLoginError] = useState("");

  const handleLoginError = () => {
    setLoginError("invalid credentials");
  };

  // console.log(userType);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const cookies = new Cookies();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/${userType}/login`, formData);
      setButtonText("logging in ...");
      console.log("response from Login: ", response);
      if (response.data.statusCode === 200) {
        // cookies.set("accessToken", response.data.data.accessToken, {
        //   path: "/",
        // });
        // cookies.set("refreshToken", response.data.data.refreshToken, {
        //   path: "/",
        // });
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        dispatch(login(response.data.data.user));
        dispatch(setRole(userType));
        navigate("/");
      }
    } catch (error) {
      console.error("Login Failed: ", error);
      handleLoginError();
      setButtonText("Failed..");
    } finally {
      setButtonText("Login");
    }
  };

  return (
    <div
      className="bg-accentoffwhite flex h-screen
                  justify-center items-center"
    >
      <Logo
        className={
          "absolute top-[5%] text-[50px] hover:cursor-pointer text-accentpurple font-semibold"
        }
      />
      <div
        className="flex justify-center items-center border-[5px] border-opacity-55
       border-accentpurple w-[70%] h-[70%] rounded-[20px] overflow-hidden"
      >
        <div className="flex-1">
          <h1 className="text-[50px] font-extrabold ml-[30%] text-accentpurple whitespace-normal">
            {"welcome back user".split(" ").map((char, index) => (
              <span key={index} className="block">
                {char}
              </span>
            ))}
          </h1>
        </div>
        <div className="flex-1 mr-[40px]">
          <form className="flex flex-col gap-[20px] items-center">
            <input
              type="email"
              name="email"
              value={formData.email.toLowerCase()}
              onChange={handleFormChange}
              placeholder="email"
              className={inputClass}
            />
            <input
              type="text"
              name="username"
              value={formData.username.toLowerCase()}
              onChange={handleFormChange}
              placeholder="username"
              className={inputClass}
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              placeholder="password"
              className={inputClass}
            />
            <button
              type="submit"
              name="password"
              className={buttonClass}
              onClick={handleLogin}
            >
              {buttonText}
            </button>
            <span>{loginError}</span>
            <div className="flex gap-[10px] flex-col justify-center items-center">
              {/* <NavLink to={`/register/${userType}`}>
                <h6 className="font-medium text-[20px] hover:cursor-pointer text-accentblack hover:">
                  register
                </h6>
              </NavLink> */}
              <NavLink
                to={`/login/${userType === "banker" ? "customer" : "banker"}`}
              >
                <h6 className="font-medium text-[20px] hover:cursor-pointer text-accentblack hover:">
                  {userType === "banker" ? "customer?" : "banker?"}
                </h6>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
