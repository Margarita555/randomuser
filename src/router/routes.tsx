import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { HomePage, LoginPage, LogoutPage, NotFoundPage, UserInfoPage, UsersPage } from "../pages";
import { Layout } from "../shared/components";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Navigate to="/login" replace />
        }
      />
      <Route
        path="/login"
        element={
          <LoginPage />
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="users" element={<UsersPage />} />
        <Route path="users/info" element={<UserInfoPage />} />
        <Route index element={<HomePage />} />
      </Route>
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <LogoutPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);

export default routes;
