import React, { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("dark-mode");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="switch"> 

      <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      <span className="slider round"></span>
    </label>
  );
};

export default DarkModeToggle;
