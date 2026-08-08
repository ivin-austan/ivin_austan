import React, { createContext, useEffect, useState } from 'react';


export const Contextreact = createContext();

const Context = ({ children }) => {
  const [scroll, setScroll] = useState(false);
  // Use a new preference key so visitors who inherited the former dark default
  // start in light mode, while choices made from now on are still remembered.
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme-v2") || "light");

  useEffect(() => {
    localStorage.setItem("portfolio-theme-v2", theme);
  }, [theme]);

  return (
    <Contextreact.Provider value={{ scroll, setScroll, theme, setTheme }}>
      <div data-theme={theme} className="app-theme">
        {children}
      </div>
    </Contextreact.Provider>
  );
};

export default Context;
