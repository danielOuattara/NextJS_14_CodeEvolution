"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

type TypeAuthProps = {
  children: React.ReactNode;
};

const navLinks = [
  { link_name: "Register", href: "/register" },
  { link_name: "Login", href: "/login" },
  { link_name: "Forgot Password", href: "/forgot-password" },
  { link_name: "Home", href: "/" },
];

export default function AuthLayout({ children }: TypeAuthProps) {
  const pathname = usePathname();
  console.log("pathname = ", pathname);

  return (
    <div>
      {navLinks.map((link) => (
        <Link
          key={link.link_name}
          href={link.href}
          //   className={`link ${pathname === link.href ? "active" : ""}`}
          className={`link mr-4 font-bold ${
            pathname === link.href ? "text-blue-500 underline" : ""
          }`}
        >
          {link.link_name}
        </Link>
      ))}
      {children}
    </div>
  );
}
