import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../modules/auth/selectors";

export default function PrivateRoute({ children }: { children: ReactElement<any, any> }) {
  const isLoggedIn = localStorage.getItem("authenticated");
  // console.log(isLoggedIn);
  return isLoggedIn === "true" ? children : <Navigate to="/login" />;
}

// export default function PrivateRoute({ children }: { children: ReactElement<any, any> }) {
//   const isLoggedIn = useSelector(isLoggedInSelector);
//   console.log(isLoggedIn);
//   return isLoggedIn ? children : <Navigate to="/login" />;
// }
