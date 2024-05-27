"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-red-500">
        Error fetching users data
        <h2>Something went wrong!</h2>
      </div>
    </div>
  );
}
