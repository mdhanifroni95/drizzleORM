import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { posts } from "./posts.schema";
import { comments } from "./comments.schema";
import { usersToGroups } from "./groups.schema";
import { profileInfo } from "./profile_info.schema";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export const userRelations = relations(users, ({ one, many }) => ({
  post: many(posts),
  comment: many(comments),
  userToGroup: many(usersToGroups),
  profileInfo: one(profileInfo),
}));
