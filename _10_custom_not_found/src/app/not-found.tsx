// pages/404.tsx
import styling from "./not-found.module.css";

export default function Custom404() {
  return (
    <div style={notFoundStyle} className={styling.notFoundStyle}>
      <h1>404 - Page Not Found</h1>
      <p>The resource is not found, sorry</p>
    </div>
  );
}

const notFoundStyle = {
  display: "flex",
  flexDirection: "column",
  //   justifyContent: "center",
  alignItems: "center",
  color: "green",
} as React.CSSProperties;
