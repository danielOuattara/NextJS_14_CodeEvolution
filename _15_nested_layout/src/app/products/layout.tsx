export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={allProducts}>
      <h2>Welcome to products page (layout)</h2>
      {children}
      {/* Carousel here */}
    </section>
  );
}

const allProducts: React.CSSProperties = {
  border: "1px solid orange",
  padding: "10px",
  margin: "20px 10px",
  textAlign: "center",
};
