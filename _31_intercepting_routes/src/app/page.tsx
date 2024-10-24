import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> Welcome ! Home page</h1>
      <Link href={"/f1"}>Navigate to f1 page</Link>
      <br />
      <Link href={"/f1/f3"}>Navigate to f3 page</Link>
    </>
  );
}
