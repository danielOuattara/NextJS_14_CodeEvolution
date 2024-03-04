import { comments } from "../data";

type TypeContext = {
  params: {
    commentId: string;
  };
};

//--------------------------------------------------------------------

export async function GET(_request: Request, context: TypeContext) {
  const comment = comments.find(
    (item) => item.id === parseInt(context.params.commentId),
  );

  if (!comment) {
    return new Response("Comment Not Found", {
      status: 404,
    });
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

export async function DELETE(_request: Request, context: TypeContext) {
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
