"use client";

import { useState } from "react";
import ClientComponent2 from "./ClientComponent2";

type TypeProps = {
  children: React.ReactNode;
};

export default function ClientComponent1({ children }: TypeProps) {
  const [_name, _setName] = useState("John Doe");
  return (
    <div
      style={{ border: "1px dashed green", margin: "1rem", padding: "1rem" }}
    >
      <h2>Client component 1</h2>
      <ClientComponent2 />
      {children}
    </div>
  );
}
