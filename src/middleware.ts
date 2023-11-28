import type { MiddlewareResponseHandler } from "astro";

export const onRequest: MiddlewareResponseHandler = ({ request }, next) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  if (pathname === "/" || /^\/(en|fr)\//.test(pathname)) {
    return next();
  }

  return new Response(null, { status: 404 });
};
