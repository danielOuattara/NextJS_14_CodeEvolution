"use client";

type ErrorType = {
  error: Error;
  reset: () => void;
};
export default function ErrorBoundary({ error, reset }: ErrorType) {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        Error in reviewId: {error.message}
      </div>
      <button onClick={reset}>Try again !</button>
    </>
  );
}
