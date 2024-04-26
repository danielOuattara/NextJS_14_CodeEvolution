import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  //------

  console.log(request.headers.get("Authorization"));
  console.log(request.headers.get("secret"));

  //------ OR

  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  console.log(requestHeaders.get("secret"));

  //------ OR

  const headerList = headers();
  console.log(headerList.get("Authorization"));
  console.log(headerList.get("secret"));

  //------- OR

  // return new Response("Profile API data !");
  return new Response("<h1>Profile API data !</h1>", {
    headers: {
      "content-type": "text/html",
      Authorization: "AZERTY",
      country: "China",
    },
    statusText: "Successful Req",
    status: 200,
  });
}
