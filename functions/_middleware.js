export async function onRequest(context) {
    const url = new URL(context.request.url);
    if (url.pathname.startsWith('/auth')) {
      return context.next();
    }
    return new Response('Not Found', { status: 404 });
  }