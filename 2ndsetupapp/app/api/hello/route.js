// app/api/hello/route.js

export async function GET(request) {
  return new Response(JSON.stringify({ message: 'GET success from App Router API from app/api/hello' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}


export async function POST(request) {
  const body = await request.json();
  return new Response(JSON.stringify({ message: 'POST success', received: body }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }, 
    //this is for saying fronend the response is in json format please format it according to you
  });
}
