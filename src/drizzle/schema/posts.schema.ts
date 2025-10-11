import { pgTable, text, integer, serial } from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { relations } from "drizzle-orm";
import { comments } from "./comments.schema";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  author_id: integer("author_id").references(() => users.id),
});

export const postRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.author_id],
    references: [users.id],
  }),

  comment: many(comments),
}));
