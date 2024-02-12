import { comments } from "./data"

export async function GET() {
    return Response.json({ hits: comments.length, comments })
}


export async function POST(request: Request) {
    const { text } = await request.json()
    comments.push({ id: new Date().getTime(), text })
    return new Response(JSON.stringify(comments), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    })
}