import { comments } from "../data";

type TypeContext = {
    params: {
        commentId: string;
    };
};

export async function GET(request: Request, context: TypeContext) {
    const comment = comments.find(
        (item) => item.id === parseInt(context.params.commentId),
    );
    return Response.json({ comment });
}

