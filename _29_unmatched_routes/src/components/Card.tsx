type TypeProps = {
  children: React.ReactNode;
};

export default function Card({ children }: TypeProps) {
  return <div style={cardStyle}>{children}</div>;
}

const cardStyle: React.CSSProperties = {
  padding: "100px",
  margin: "10px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.32)",
  border: "1px solid #ddd",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};
