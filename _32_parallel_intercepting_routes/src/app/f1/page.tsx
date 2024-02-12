import Link from "next/link";

export default function F1_Page() {
  return (
    <>
      <h1>F1 page</h1>
      <div>
        <Link href="/f1/f2">go to F2 page</Link>
      </div>
    </>
  );
}
