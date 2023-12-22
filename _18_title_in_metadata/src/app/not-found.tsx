// pages/404.tsx
export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The resource is not found, sorry</p>
    </div>
  );
}

const notFoundStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  //   justifyContent: "center",
  alignItems: "center",
};
