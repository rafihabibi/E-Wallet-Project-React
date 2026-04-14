import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const isLogin = useSelector((state) => state.auth.isLogin);

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
