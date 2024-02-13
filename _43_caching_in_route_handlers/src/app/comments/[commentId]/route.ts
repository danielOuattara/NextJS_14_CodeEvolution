import { comments } from "../data";
import { redirect } from "next/navigation";

type TypeContext = {
  params: {
    commentId: string;
  };
};

//--------------------------------------------------------------------
export async function GET(request: Request, context: TypeContext) {
  const comment = comments.find(
    (item) => item.id === parseInt(context.params.commentId),
  );

  /*  Not found: throw a 404 
  ----------------------------*/
  // if (!comment) {
  //     return new Response("Comment Not Found", {
  //         status: 404
  //     })
  // }

  /* Not Found: Redirect */

  if (!comment) {
    return redirect("/comments");
  }

  return Response.json({ comment });
}

//--------------------------------------------------------------------
export async function PATCH(request: Request, context: TypeContext) {
  const commentIndex = comments.findIndex(
    (item) => item.id === parseInt(context.params.commentId),
  );
  if (commentIndex === -1) {
    return new Response("Comment Not Found", {
      status: 404,
    });
  }

  const body = await request.json();

  comments[commentIndex] = { ...comments[commentIndex], ...body };

  return Response.json({ comments });
}

//--------------------------------------------------------------------
export async function DELETE(request: Request, context: TypeContext) {
  const commentIndex = comments.findIndex(
    (item) => item.id === parseInt(context.params.commentId),
  );
  if (commentIndex === -1) {
    return new Response("Comment Not Found", {
      status: 404,
    });
  }

  comments.splice(commentIndex, 1);

  return Response.json({ comments });
}
