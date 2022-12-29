import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { HomePage, LoginPage, LogoutPage, NotFoundPage, UserInfoPage, UsersPage } from "../pages";
import { Layout } from "../shared/components";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <PublicRoute restricted>
            <Navigate to="/login" replace />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute restricted>
            <LoginPage />
          </PublicRoute>
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
        <Route path="users/:userId" element={<UserInfoPage />} />
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

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <NotFoundPage />,
//     children: [
//       {
//         path: "login",
//         element: <LoginPage />,
//       },
//       {
//         path: "home",
//         element: <Layout />,
//         children: [
//           {
//
//             element: <HomePage />,
//           },
//         ],
//       },
//       {
//         path: "logout",
//         element: <LogoutPage />,
//       },
//     ],
//   },
// ]);

export default routes;
