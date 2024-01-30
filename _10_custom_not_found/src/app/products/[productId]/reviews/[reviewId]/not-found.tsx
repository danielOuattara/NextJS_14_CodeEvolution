// pages/404.tsx
export default function NotFound() {
  return (
    <div style={notFoundStyle}>
      <h1>404 : Review not Found</h1>
    </div>
  );
}

const notFoundStyle = {
  display: "flex",
  flexDirection: "column",
  //   justifyContent: "center",
  alignItems: "center",
} as React.CSSProperties;
