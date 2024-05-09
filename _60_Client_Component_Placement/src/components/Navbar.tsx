import NavLinks from "./NavLinks";
import NavSearch from "./NavSearch";

export default function Navbar() {
  console.log("Navbar Rendered");

  return (
    <>
      <NavLinks />
      <NavSearch />
    </>
  );
}
