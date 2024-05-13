import fs from "node:fs";
import ServerComponent2 from "./ServerComponent2";
// import ClientComponent1 from "./ClientComponent1";

export default function ServerComponent1() {
  fs.readFileSync("src/components/ServerComponent1.tsx", "utf-8");
  return (
    <div style={{ border: "1px solid green", margin: "1rem", padding: "1rem" }}>
      <h2>Server component 1</h2>
      {/* <ServerComponent2 /> */}
      {/* ------------- */}
      {/* <ClientComponent1 /> */}
    </div>
  );
}
