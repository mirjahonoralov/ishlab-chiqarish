import React from "react";
import "./style.css";

const ThemeMode = () => {
  return (
    <label id="switch" class="switch">
      <input type="checkbox" onchange="toggleTheme()" id="slider" />
      <span class="slider round"></span>
    </label>
  );
};

export default ThemeMode;
