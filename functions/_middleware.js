export async function onRequest(context) {
    const url = new URL(context.request.url);
    
    // Разрешаем все запросы к /admin
    if (url.pathname.startsWith('/admin')) {
      return context.next();
    }
    
    // Разрешаем запросы к /auth
    if (url.pathname.startsWith('/auth')) {
      return context.next();
    }
    
    return new Response('Not Found', { status: 404 });
  }