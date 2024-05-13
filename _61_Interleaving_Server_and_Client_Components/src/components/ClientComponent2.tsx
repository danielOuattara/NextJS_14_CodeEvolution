"use client";

import { useState } from "react";

export default function ClientComponent2() {
  const [_name, _setName] = useState("Mike Tyson");
  return (
    <div style={{ border: "1px dashed blue", margin: "1rem", padding: "1rem" }}>
      <h2>Client component 2</h2>
    </div>
  );
}
