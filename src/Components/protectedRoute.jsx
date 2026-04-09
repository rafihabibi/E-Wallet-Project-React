import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const isLogin = localStorage.getItem("isLogin");
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
