import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products page",
  description: "Products page",
};

export default function ProductList() {
  return (
    <>
      <h1>Product list page</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
}
