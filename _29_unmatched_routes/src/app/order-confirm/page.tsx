// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// export default function OrderConfirmPage() {
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push("/");
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [router]);

//   return (
//     <>
//       <h1>Your Order was Successful ! </h1>
//       <p>You will be redirected to home page in {}</p>
//     </>
//   );
// }

//-------------------------------------------------------

"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderConfirmPage() {
  const router = useRouter();
  const [timeToHomeRouting, setTimeToHomeRouting] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeToHomeRouting((prevState) => prevState - 1);
      if (timeToHomeRouting <= 1) {
        router.push("/");
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [router, timeToHomeRouting]);

  return (
    <>
      <h1>Your Order was Successful ! </h1>
      <p>You will be redirected to home page in {timeToHomeRouting} secondes</p>
    </>
  );
}
