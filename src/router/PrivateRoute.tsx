import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: ReactElement<any, any> }) {
  const isLoggedIn = localStorage.getItem("authenticated");
  return isLoggedIn === "true" ? children : <Navigate to="/login" />;
}
