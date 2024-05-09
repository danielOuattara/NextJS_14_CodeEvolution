import { cookies } from "next/headers";
export default function AboutPage() {
  console.log("About server component");

  const cookiesStore = cookies();
  const theme = cookiesStore.get("theme");
  console.log("theme cookie = ", theme);

  return (
    <>
      <h1>About Page</h1>
      <p>{new Date().toLocaleString()}</p>
    </>
  );
}
