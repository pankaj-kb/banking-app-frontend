import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, setRole } from "./features/authSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";

function AuthRouter() {
    const dispatch = useDispatch();
    
  return <RouterProvider router={router} />;
}

export default AuthRouter;
