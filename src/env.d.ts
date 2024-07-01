/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="astro/client" />

declare module 'astro:db' {
  export const db: import('drizzle-orm/libsql').LibSQLDatabase;
}
