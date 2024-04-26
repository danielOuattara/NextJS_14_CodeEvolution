"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

//-----

type TypeAuthContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};
export const AuthContext = createContext<TypeAuthContext | null>(null);

//-----

type TypeAuthContextProvider = {
  children: React.ReactNode;
};

export default function AuthContextProvider({
  children,
}: TypeAuthContextProvider) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

//-----

export function useAuthContext() {
  return useContext(AuthContext);
}
