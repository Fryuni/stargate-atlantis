import { defineDB, defineTable, column } from 'astro:db';

const Comments = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    content: column.text({ default: 'No content' }),
    author: column.text(),
  },
});

export default defineDB({
  tables: {
    Comments,
  },
});
