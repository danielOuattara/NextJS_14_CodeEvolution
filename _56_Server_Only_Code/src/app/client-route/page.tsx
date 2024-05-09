"use client";

import { serverSideFunction } from "@/utils/server-utils";
export default function ClientRoutePage() {
  console.log(`Server Route Rendered`);

  const result = serverSideFunction();
  return (
    <>
      <h1>ClientRoutePage</h1>
      <p>{result}</p>
    </>
  );
}
