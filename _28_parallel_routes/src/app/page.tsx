import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> Welcome ! Home page</h1>
      <Link href={"/blog"}>Visit Blogs</Link>
      <br />
      <Link href={"/products"}>Visit Products</Link>
      <br />
      <Link href={"/order-product"}>Order Product</Link>
      <br />
      <Link href={"/dashboard-old-bundle"}>Dashboard components bundled</Link>
      <br />
      <Link href={"/dashboard-parallel-routes"}>Dashboard parallel route</Link>
    </>
  );
}
