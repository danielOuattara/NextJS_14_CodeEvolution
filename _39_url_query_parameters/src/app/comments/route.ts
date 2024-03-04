import { NextRequest } from "next/server";
import { comments } from "./data";

//--------------------------------------------------------------------

// export async function GET(request: Request) {
//   console.log("request = ", request);
//   console.log("request.url = ", request.url);

//   const url = new URL(request.url);
//   console.log("url = ", url);

//   const query = url.searchParams.get("query");
//   console.log("query = ", query);

//   return Response.json({ hits: comments.length, comments });
// }

//=====

export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // const query = searchParams.get("query");
  // const filteredComments = query
  //   ? comments.filter((comment) => comment.text.includes(query))
  //   : comments;
  // return Response.json({ filteredComments });

  // /*--------- one way of getting params -------------*/

  // const { searchParams } = new URL(request.url);
  // const query = searchParams.get("query");
  // const filteredComments = query
  //   ? comments.filter((comment) => comment.text.includes(query))
  //   : comments;
  // return Response.json({ filteredComments });

  // /*--------  another efficient way of getting params ------*/

  const { searchParams } = new URL(request.url);
  const obj = Object.fromEntries(searchParams.entries());
  let filteredComments = undefined;
  for (const key in obj) {
    filteredComments = key
      ? comments.filter((comment) => comment.text.includes(obj[key]))
      : comments;
  }
  return Response.json({ filteredComments });
}

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
