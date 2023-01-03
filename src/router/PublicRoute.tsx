import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }: { children: ReactElement<any, any>}) {
  const isLoggedIn = localStorage.getItem("authenticated");
  return isLoggedIn === "true" ? <Navigate to="/home" /> : children;
}
