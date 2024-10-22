"use client";

type ErrorType = {
  error: Error;
};
export default function ErrorBoundary({ error }: ErrorType) {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "1.5rem",
        width: "30%",
        margin: "0 auto",
      }}
    >
      Error in reviewId: {error.message}
    </div>
  );
}
