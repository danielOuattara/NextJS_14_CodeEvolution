"use client";

type ErrorType = {
  error: Error;
};
export default function ErrorBoundary({ error }: ErrorType) {
  return (
    <div style={{ backgroundColor: "red" }}>
      Error in reviewId: {error.message}
    </div>
  );
}
