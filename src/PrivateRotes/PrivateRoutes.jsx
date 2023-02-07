import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const PrivateRoutes = (props) => {
  const { user } = useContext(UserContext);
  if (user === null){
    return (
      <Navigate to="/login" />
    )
  } else {
    <Navigate to='/' />
  }

  return props.children;
};

export default PrivateRoutes;
