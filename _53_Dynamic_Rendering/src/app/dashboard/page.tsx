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
        className="bg-blue-300 py-2 px-8 m-3 rounded-md"
      >
        click
      </button>
      <br />
      <label htmlFor="name">
        Name:
        <input
          className="border border-blue-300 rounded-[4px] ml-4"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {name && <h2>Hello {name}</h2>}
    </>
  );
}
