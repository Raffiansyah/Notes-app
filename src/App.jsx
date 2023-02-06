import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./app.scss";
import { ThemeContext } from "./Context/ThemeContext";
import { UserContext } from "./Context/UserContext";
import { router } from "./Router/Routes";

export default function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("dark");

  const userContextValue = {
    user,
    setUser,
  };

  const themeContextValue = {
    theme,
    setTheme,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
