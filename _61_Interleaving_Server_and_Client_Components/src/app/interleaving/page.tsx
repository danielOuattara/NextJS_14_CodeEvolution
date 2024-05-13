import ClientComponent1 from "@/components/ClientComponent1";
import ServerComponent1 from "@/components/ServerComponent1";

export default function InterleavingPage() {
  return (
    <>
      <h2>Interleaving Page</h2>
      {/* <ServerComponent1 />
      <ClientComponent1 /> */}

      {/* ------------------ */}

      <ServerComponent1 />

      <ClientComponent1>
        <ServerComponent1 />
      </ClientComponent1>
    </>
  );
}
