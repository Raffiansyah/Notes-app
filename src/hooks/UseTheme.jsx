import React, { useState } from "react";

export default function UseTheme() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = (value) => {
    setTheme(value);
    const root = window.document.documentElement;
    root.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);
  };
  return [theme, changeTheme]
}
