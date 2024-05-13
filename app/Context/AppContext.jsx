"use client";
import {
  createContext,
  useReducer,
  useState,
  useEffect,
  useContext,
} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  let [state, setState] = useState({
    cart: [],
    isCartOpen: false,
    isMenuOpen: false,
  });
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
