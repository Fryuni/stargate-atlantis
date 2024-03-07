import type { APIRoute } from 'astro';
import { db, WebHooks } from 'astro:db';

export const ALL: APIRoute = async (context) => {
  try {
    await db.insert(WebHooks).values({
      content: await getBody(context.request),
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

async function getBody(request: Request): Promise<unknown> {
  const text = await request.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

