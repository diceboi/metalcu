'use client'

import { createContext, useState } from "react";

export const Context = createContext({
  isSideMenuOpen: false,
  toggleSideMenu: () => {},
  setSideMenuOpen: () => {},
  setSideMenuClose: () => {},
});

export default function ContextProvider({ children }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  /* Side menu */
  const toggleSideMenu = () => {
    setIsSideMenuOpen((prevState) => !prevState);
  };

  const setSideMenuOpen = () => setIsSideMenuOpen(true);
  const setSideMenuClose = () => setIsSideMenuOpen(false);

  return (
    <Context.Provider value={{
      isSideMenuOpen,
      toggleSideMenu,
      setSideMenuOpen,
      setSideMenuClose,
    }}>
      {children}
    </Context.Provider>
  );
}
