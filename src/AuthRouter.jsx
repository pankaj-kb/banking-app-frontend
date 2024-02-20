import axios from "./axiosConfig.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, setRole } from "./features/authSlice";
import { RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./App";
import Loading from "./components/Loading.jsx";

function AuthRouter() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/customer/current-user");
        console.log(response);
        if (response.data.statusCode === 200) {
          dispatch(login(response.data.data));
          if (!response.data.data?.role) {
            dispatch(setRole("customer"));
          } else {
            dispatch(setRole("banker"));
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <>{loading ? <Loading /> : <RouterProvider router={router} />}</>
    // <><RouterProvider router={router}/></>
  );
}

export default AuthRouter;
