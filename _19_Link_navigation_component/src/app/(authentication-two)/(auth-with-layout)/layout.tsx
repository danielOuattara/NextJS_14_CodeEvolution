export const metadata = {
  title: "Auth",
  description: "Generated by Next.js",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Inner layout</h2>
      {children}
    </>
  );
}
