"use client";

import { useState } from "react";

export default function DashboardPage() {
  console.log("dash board page");
  const [name, setName] = useState("");
  return (
    <>
      <h1>Dashboard Page</h1>
      <button
        onClick={() => console.log("Clicked!")}
        style={{
          background: "lightblue",
          padding: "5px 30px",
          margin: "10px",
          borderRadius: "5px",
        }}
      >
        click
      </button>
      <br />
      <label htmlFor="name">
        Name:
        <input
          style={{ border: "1px solid lightblue", marginLeft: "10px" }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {name && <h2>Hello {name}</h2>}
    </>
  );
}
