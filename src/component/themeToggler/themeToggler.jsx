import "./themeToggler.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the current theme from localStorage or default to light
    const currentTheme = document.body.getAttribute("data-theme") || "light";
    setIsDarkMode(currentTheme === "dark");
  }, []);

  const switchTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className="theme-toggler" onClick={switchTheme} type="submit">
      {isDarkMode ? <BsMoon size={24} /> : <BsSun size={24} />}
    </button>
  );
}

/*

import "./themeToggler.css";

export default function ThemeToggler() {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={switchTheme} />
      <span className="slider round" />
    </label>
  );
}
*/
