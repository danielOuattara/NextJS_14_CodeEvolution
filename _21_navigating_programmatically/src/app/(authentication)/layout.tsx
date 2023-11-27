"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { link_name: "Register", href: "/register" },
  { link_name: "Login", href: "/login" },
  { link_name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
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
    </div>
  );
}
