import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import AuthCheck from "./AuthCheck";
import LoginCheck from "./LoginCheck";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CustomerPage from "./pages/CustomerPage";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <AuthCheck>
            <HomePage />
          </AuthCheck>
        }
      />
      <Route
        path="/customer/:customerId"
        element={
          <AuthCheck>
            <CustomerPage />
          </AuthCheck>
        }
      />
      <Route
        path="login/:userType"
        element={
          <LoginCheck>
            <LoginPage />
          </LoginCheck>
        }
      />
    </Route>
  )
);
