export default function SingleProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function getRandomInteger(count: number) {
    return Math.floor(Math.random() * count);
  }
  const randomInteger: number = getRandomInteger(2);
  console.log("randomInteger = ", randomInteger);

  if (randomInteger === 1) {
    throw new Error("Error loading review !");
  }

  return (
    <article style={singleProduct}>
      <h2>Single product page</h2>
      {children}
      {/* Carousel here */}
    </article>
  );
}

const singleProduct: React.CSSProperties = {
  backgroundColor: "orange",
  padding: "10px",
  textAlign: "center",
};
