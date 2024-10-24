"use client";

import { useAuthContext } from "@/context/AuthContext";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   // title: "Next.js",
//   title: {
//     absolute: "",
//     default: "parallel routes",
//   },
//   description: "Generated by Next.js",
// };

type TypeRootLayoutProps = {
  children: React.ReactNode;
  login: React.ReactNode;
  notifications: React.ReactNode;
  revenuemetrics: React.ReactNode;
  useranalytics: React.ReactNode;
};

export default function RootLayout({
  children,
  login,
  useranalytics,
  revenuemetrics,
  notifications,
}: TypeRootLayoutProps) {
  const context = useAuthContext();
  const isLoggedIn = context?.isLoggedIn || false;
  const setIsLoggedIn = context?.setIsLoggedIn || (() => {});

  return (
    <>
      <div>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      {isLoggedIn ? (
        <>
          {children}
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div style={{ display: "flex" }}>{useranalytics}</div>
              <div style={{ display: "flex" }}>{revenuemetrics}</div>
            </div>
            <div style={{ display: "flex" }}>{notifications}</div>
          </div>
        </>
      ) : (
        login
      )}
    </>
  );
}
