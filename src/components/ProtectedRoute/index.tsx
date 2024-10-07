import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../utils/StorageUtilites";
const ProtectedRoute: React.FC = () => {
  const jwtToken = getCookie();

  if (jwtToken === undefined) {
    return <Navigate to="/signIn" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
