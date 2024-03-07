import { defineDB, defineTable, column, sql } from 'astro:db';

const WebHooks = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    timestamp: column.number({
      default: sql`CURRENT_TIMESTAMP`,
    }),
    content: column.json(),
    headers: column.json(),
  },
});

const Changelog = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    committer: column.text(),
    changeset: column.text(),
  },
});

export default defineDB({
  tables: {
    WebHooks,
    Changelog,
  },
});
