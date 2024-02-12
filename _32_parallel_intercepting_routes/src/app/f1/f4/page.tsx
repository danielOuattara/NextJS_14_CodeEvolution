import Link from "next/link";

export default function F4_Page() {
  return (
    <>
      <h1>F4 page</h1>
      <div>
        <Link href="/f1/f3">go to F3 page</Link>
        <br />
        <Link href="/about">go to about page</Link>
      </div>
    </>
  );
}
