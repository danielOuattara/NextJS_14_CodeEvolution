/* 
template does not preserves the state for shared UI.
template mounts the parts of the content of the 
new loaded page 
and does not conserve the template of the 
already mounted elements

template does remount shared component

*/

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

type TypeChildren = {
  children: React.ReactNode;
};
const navLinks = [
  { link_name: "Register", href: "/register" },
  { link_name: "Login", href: "/login" },
  { link_name: "Forgot Password", href: "/forgot-password" },
];

export default function Template({ children }: TypeChildren) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div
      style={{
        border: "1px solid orange",
        margin: "2rem auto",
        padding: "2rem",
      }}
    >
      <h2>Template</h2>
      <div>
        <label>
          user in template :
          <input
            style={{ border: "1px solid gray" }}
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="type in some info"
          />
        </label>
      </div>
      {navLinks.map((link) => (
        <Link
          key={link.link_name}
          href={link.href}
          //   className={`link ${pathname === link.href ? "active" : ""}`}
          className={`link ${
            pathname === link.href ? "font-bold mr-4" : "text-blue-500 mr-4"
          }`}
        >
          {link.link_name}
        </Link>
      ))}
      {children}
    </div>
  );
}
