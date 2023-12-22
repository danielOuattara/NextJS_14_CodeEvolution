import type { Metadata } from "next";

export const metadata: Metadata = {
  // title: "Blog " /*  1 */,
  title: { absolute: "Blog" } /* 2 */,
};

export default function Blog() {
  return (
    <>
      <h1>Blog root page</h1>
    </>
  );
}
