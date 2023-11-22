export function onRequest({ request, redirect }, next) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname === "/" || /\/(en|fr)\//.test(pathname)) {
    return next();
  }
  return Response.redirect(new URL("/404", request.url), 302);
}
