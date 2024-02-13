import { NextRequest } from "next/server";
import { headers } from "next/headers";

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
  return new Response("<h1>Profile API data !</h1>", {
    headers: {
      "content-type": "text/html",
      Authorization: "AZERTY",
      country: "China",
    },
    statusText: "Successful Request",
    status: 200,
  });
}
