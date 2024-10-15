export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    return new Response('Hello, world!', {
        headers: { 'content-type': 'text/plain' },
    })
}