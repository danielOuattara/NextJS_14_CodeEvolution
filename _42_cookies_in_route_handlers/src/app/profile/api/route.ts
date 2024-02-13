import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  //------------------------------------------------ OR

  console.log(request.headers.get("Authorization"));

  //------------------------------------------------ OR

  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  //------------------------------------------------ OR

  const headerList = headers();
  console.log(headerList.get("Authorization"));

  //------------------------------------------------- OR
  //   return new Response("Profile API data !");

  // read cookie from request N°1
  console.log(request.cookies.get("theme"));

  // read cookie from request N°2
  console.log(cookies().get("resultPerPage"));
  console.log(cookies().get("user"));
  console.log(cookies().get("user-auth"));

  // send cookie N°2
  cookies().set("resultPerPage", "20");
  cookies().set("user", "ADMIN");
  cookies().set(
    "user-auth",
    `${requestHeaders.get("Authorization")?.replace(" ", "_")}`,
  );

  // response
  return new Response("<h1>Profile API data !</h1>", {
    headers: {
      "content-type": "text/html",
      "Set-Cookie": "theme=dark", // set cookie: N°1
    },
    statusText: "OK",
    status: 200,
  });
}
