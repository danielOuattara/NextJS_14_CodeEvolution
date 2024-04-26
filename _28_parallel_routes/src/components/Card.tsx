type TypeProps = {
  children: React.ReactNode;
};

export default function Card({ children }: TypeProps) {
  return <div style={cardStyle}>{children}</div>;
}

const cardStyle: React.CSSProperties = {
  padding: "100px",
  width: "100%",
  boxShadow: "1px 4px 8px 1px rgba(0,0,0,0.32)",
  border: "2px solid #e9e9e9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
