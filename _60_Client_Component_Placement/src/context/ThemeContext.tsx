"use client";

import { createContext, useContext } from "react";

type TypeThemeContext = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: TypeThemeContext = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

export const ThemeContext = createContext<TypeThemeContext>(defaultTheme);

//----------

type TypeProps = {
  children: React.ReactNode;
};

export default function ThemeContextProvider({ children }: TypeProps) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

// ----------
export const useThemeContext = () => useContext(ThemeContext);
