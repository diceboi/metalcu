'use client'

import { createContext, useState } from "react";

export const Context = createContext({
  isSideMenuOpen: false,
  toggleSideMenu: () => {},
  setSideMenuOpen: () => {},
  setSideMenuClose: () => {},
  openPopup: null,
  togglePopup: () => {},
  setOpenPopup: () => {},
  form: 'login',
  setForm: () => {},
});

export default function ContextProvider({ children }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(null);
  const [form, setForm] = useState('login');

  /* Side menu */
  const toggleSideMenu = () => {
    setIsSideMenuOpen((prevState) => !prevState);
  };

  const setSideMenuOpen = () => setIsSideMenuOpen(true);
  const setSideMenuClose = () => setIsSideMenuOpen(false);

  /* Modal */
  const togglePopup = (popupName) => {
    setOpenPopup((prevPopup) => (prevPopup === popupName ? null : popupName));
  };

  return (
    <Context.Provider value={{
      isSideMenuOpen,
      toggleSideMenu,
      setSideMenuOpen,
      setSideMenuClose,
      openPopup,
      togglePopup,
      setOpenPopup,
      form,
      setForm,
    }}>
      {children}
    </Context.Provider>
  );
}