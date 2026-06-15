export function GET() {
  return new Response("google.com, pub-3807886144987847, DIRECT, f08c47fec0942fa0\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
