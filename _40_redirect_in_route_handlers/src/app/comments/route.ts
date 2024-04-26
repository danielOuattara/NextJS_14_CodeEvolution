import { NextRequest } from "next/server";
import { comments } from "./data";

//--------------------------------------------------------------------
// export async function GET() {
//     return Response.json({ hits: comments.length, comments })
// }

//--------------------------------------------------------------------

export async function POST(request: Request) {
  const { text } = await request.json();
  comments.push({ id: new Date().getTime(), text });
  return new Response(JSON.stringify(comments), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

//--------------------------------------------------------------------

// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   const filteredComments = query
//     ? comments.filter((comment) => comment.text.includes(query))
//     : comments;
//   return Response.json(filteredComments);
// }

//--------------------------------------------------------------------

/*--------- one way of getting params -------------*/
// export async function GET(request: NextRequest) {
//   // const { searchParams } = new URL(request.url);
//   // OR
//   const { searchParams } = new URL(request.nextUrl);
//   const query = searchParams.get("query");
//   const filteredComments = query
//     ? comments.filter((comment) => comment.text.includes(query))
//     : comments;
//   return Response.json(filteredComments);
// }

//--------------------------------------------------------------------

/*--------  another efficient way of filtering on all queries params ------*/
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
  const obj = Object.fromEntries(searchParams.entries());

  let filteredComments: { [k: string]: string | number }[] = [];

  for (const key in obj) {
    filteredComments = key
      ? comments.filter((comment) => comment.text.includes(obj[key]))
      : comments;
  }
  return Response.json(filteredComments);
}
