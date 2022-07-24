import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, auth }) => {
  if (!auth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
