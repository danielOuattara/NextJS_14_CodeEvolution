import type { Metadata } from "next";

export const metadata: Metadata = {
  // title: "Blog ",
  title: { absolute: "Blog" },
};

export default function Blog() {
  return (
    <>
      <h1>Blog root page</h1>
    </>
  );
}
