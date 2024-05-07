/* use a config object
-----------------------*/

// import { type NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: ["/profile"],
// };

//--------------------------------------------------------------------

/* use a conditional statement + redirect
------------------------------------------ */

// import { type NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/hello", request.url));
//   }
// }

//--------------------------------------------------------------------

/* use a conditional statement + use rewrite
--------------------------------------------- */

// import { type NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.rewrite(new URL("/hello", request.url));
//   }
// }

//--------------------------------------------------------------------

/* use cookie & headers
--------------------------*/

import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;
}
