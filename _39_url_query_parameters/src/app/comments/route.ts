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
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  // /*---------one way of getting params -------------*/

  // const { searchParams } = new URL(request.url);
  // console.log("searchParams = ", searchParams);

  // const name = searchParams.get("name");
  // console.log("name = ", name);

  // const country = searchParams.get("country");
  // console.log("country = ", country);

  // console.log("----------------------------------------");
  // /*--------  another efficient way of getting params ------*/

  // console.log("searchParams.entries() = ", searchParams.entries());

  // const obj = Object.fromEntries(searchParams.entries());
  // console.log("obj = ", obj);

  // return Response.json(obj);
  return Response.json({ filteredComments });
}
