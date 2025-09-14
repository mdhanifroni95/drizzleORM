import { pgTable, text, integer, serial } from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { posts } from "./posts.schema";

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  comments: text("comments").notNull(),
  author_id: integer("author_id").references(() => users.id),
  post_id: integer("post_id").references(() => posts.id),
});
