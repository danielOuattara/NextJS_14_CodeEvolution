import { Card } from "@/components";
// import { useAuthContext } from "@/context/AuthContext";

export default function Login() {
  // const context = useAuthContext();
  // const isLoggedIn = context?.isLoggedIn || false;
  // const setIsLoggedIn = context?.setIsLoggedIn || (() => {});
  return (
    <Card>
      <h2> please Login</h2>
      {/* <button onClick={() => setIsLoggedIn(!isLoggedIn)}>login </button> */}
    </Card>
  );
}
