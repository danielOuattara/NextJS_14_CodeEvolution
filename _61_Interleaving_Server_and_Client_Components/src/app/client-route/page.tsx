"use client";

import { clientSideFunction } from "@/utils/client-utils";
export default function ClientRoutePage() {
  console.log(`Client Route Rendered`);

  const result = clientSideFunction();
  console.log(result);

  return (
    <>
      <h1>ClientRoutePage</h1>

      <h2>{result}</h2>
    </>
  );
}
