export default function SingleProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article style={singleProduct}>
      <h2>Single product page</h2>
      {children}
      {/* Carousel here */}
    </article>
  );
}

const singleProduct = {
  backgroundColor: "orange",
  padding: "10px",
  textAlign: "center",
};
