import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomePage, LoginPage, LogoutPage, NotFoundPage, UserInfoPage, UsersPage } from "../pages";
import { Layout } from "../shared/components";

const routes = createBrowserRouter(
  createRoutesFromElements(
    //   <AuthProvider>
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          //   <RequireAuth>
          <Layout />
          //   </RequireAuth>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:userId" element={<UserInfoPage />} />
      </Route>
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>,
    // </AuthProvider>
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
