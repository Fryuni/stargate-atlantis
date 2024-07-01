import type { APIRoute } from 'astro';
import { db, Changelog, sql } from 'astro:db';

export const ALL: APIRoute = async () => {
  await (db as import('drizzle-orm/libsql').LibSQLDatabase).transaction(async tx => {
    const { count } = (await tx.select({
      count: sql`COUNT(*)`,
    }).from(Changelog)
      .get())!;

    await tx.insert(Changelog).values({
      changeset: `Increased from ${count}`,
      committer: 'Hook',
    });
  });

  return new Response('OK', {
    status: 200,
  });
};

