import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./app.scss";
import { ThemeContext } from "./Context/ThemeContext";
import { UserContext } from "./Context/UserContext";
import UseTheme from "./hooks/UseTheme";
import { router } from "./Router/Routes";
import { getUserLogged } from "./utils/api";

export default function App() {
  const [user, setUser] = useState(null);
  const [theme, changeTheme] = UseTheme();
  const [loading, setLoading] = useState(true)

  const userContextValue = {
    user,
    setUser,
  };

  const themeContextValue = {
    theme,
    changeTheme,
  };

  const updateUser = () => {
    getUserLogged()
      .then((res) => {
        try {
          setUser(res.data)
          setLoading(false)
        } catch (error) {
          alert(error)
        }
      })
  };

  const updateTheme = () => {
    if(localStorage.theme){
      changeTheme(localStorage.theme)
    } else {
      localStorage.setItem('theme', 'dark')
      changeTheme('dark')
    }
  };

  useEffect(() => {
    updateTheme()
    updateUser()
  }, []);

  return (
    <UserContext.Provider value={userContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        {!loading ? <RouterProvider router={router} /> : <p>Loading...</p>}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
