import { comments } from "../data";

type TypeContext = {
  params: {
    commentId: string;
  };
};

export async function GET(_request: Request, context: TypeContext) {
  const comment = comments.find(
    (item) => item.id === parseInt(context.params.commentId, 10),
  );
  return Response.json({ comment });
}
