import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../modules/auth/selectors";

export default function PublicRoute({ children, restricted = false }: { children: ReactElement<any, any>; restricted: boolean }) {
  const isLoggedIn = localStorage.getItem("authenticated");
  // console.log(isLoggedIn);
  return isLoggedIn === "true" ? <Navigate to="/home" /> : children;
}
// export default function PublicRoute({ children, restricted = false }: { children: ReactElement<any, any>; restricted: boolean }) {
//   const isLoggedIn = useSelector(isLoggedInSelector);
//   console.log(isLoggedIn)
//   const shouldRedirect = isLoggedIn && restricted;
//   return isLoggedIn ? <Navigate to="/home" /> : children;
// }
