export default function AboutPage() {
  console.log("About server component");
  return (
    <>
      <h1>About Page</h1>
      <p>{new Date().toLocaleString()}</p>
    </>
  );
}
