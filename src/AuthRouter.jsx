import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, setRole } from "./features/authSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";

function AuthRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("/customer/current-user");
        console.log(response);
        if (response.data.statusCode === 200) {
          dispatch(login(response.data.data));
          if (!response.data.data?.role) {
            dispatch(setRole("customer"));
          } else {
            dispatch(setRole("banker"))
          }
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default AuthRouter;
