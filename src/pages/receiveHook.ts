import type { APIRoute } from 'astro';
import { db, WebHooks } from 'astro:db';

export const ALL: APIRoute = async (context) => {
  await db.insert(WebHooks).values({
    content: await context.request.json(),
    headers: context.request.headers,
  });

  return new Response('OK', {
    status: 200,
  });
};

