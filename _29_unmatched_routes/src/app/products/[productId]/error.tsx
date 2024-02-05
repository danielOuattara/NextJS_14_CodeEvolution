"use client";

type ErrorType = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorType) {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        ERROR in Product From Product Root Page {error.message}
      </div>
    </>
  );
}
