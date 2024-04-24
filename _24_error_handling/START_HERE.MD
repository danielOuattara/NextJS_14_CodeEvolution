# What I learn here ?

- use `error.tsx` in the \[reviewId] folder
  
 ```ts
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
```

- see `diapo_*.png` for more details
