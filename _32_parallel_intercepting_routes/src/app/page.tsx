import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> Welcome ! Home page</h1>
      <Link href={"/photo-feed"}>Visit photo feed</Link>
      <br />
    </>
  );
}
