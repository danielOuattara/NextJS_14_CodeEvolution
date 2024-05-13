import fs from "node:fs";

export default function ServerComponent2() {
  fs.readFileSync("src/components/ServerComponent2.tsx", "utf-8");
  return (
    <div style={{ border: "1px solid blue", margin: "1rem", padding: "1rem" }}>
      <h2>Server component 2</h2>
    </div>
  );
}
