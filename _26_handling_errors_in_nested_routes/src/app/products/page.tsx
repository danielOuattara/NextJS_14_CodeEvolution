import Link from "next/link";

export default function ProductList() {
  function getRandomInteger(count: number) {
    return Math.floor(Math.random() * count);
  }

  const randomInteger: number = getRandomInteger(2);
  console.log("randomInteger = ", randomInteger);

  if (randomInteger === 1) {
    throw new Error("Error loading review !");
  }

  const productId = 100;
  return (
    <>
      <h1>Product list page</h1>
      <ul>
        <li>
          <Link href={"/products/1"}>Product 1</Link>
        </li>
        <li>
          <Link href={"/products/2"}>Product 2</Link>
        </li>
        <li>
          <Link href={"/products/3"} replace>
            Product 3
          </Link>
        </li>
        <li>
          <Link href={`/products/${productId}`}>Product {productId}</Link>
        </li>
      </ul>

      <Link href={"/"}>Back Home</Link>
    </>
  );
}
