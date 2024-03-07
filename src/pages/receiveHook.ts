import type { APIRoute } from 'astro';
import { db, WebHooks } from 'astro:db';

export const ALL: APIRoute = async (context) => {
  try {
    await db.insert(WebHooks).values({
      content: await context.request.json(),
      headers: context.request.headers,
    });
  } catch (e: any) {
    return new Response(JSON.stringify({
      error: e.message,
    }), {
      status: 500,
      headers: {
        'content-type': 'application/json',
      }
    });
  }

  return new Response('OK', {
    status: 200,
  });
};

