import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./app.scss";
import { UserContext } from "./Context/UserContext";
import { router } from "./Router/Routes";


export default function App() {
  const [user, setUser] = useState(null)

  const userContextValue = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}
