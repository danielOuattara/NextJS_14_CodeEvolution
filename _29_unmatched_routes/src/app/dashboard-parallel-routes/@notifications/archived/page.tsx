import { Card } from "@/components";
import Link from "next/link";

export default function Archived() {
  return (
    <Card>
      <h2>Archived Notifications</h2>
      <Link href="/dashboard-parallel-routes">Current Notifications</Link>
    </Card>
  );
}
