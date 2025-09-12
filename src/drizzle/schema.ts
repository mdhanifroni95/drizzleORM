import { integer } from "drizzle-orm/pg-core";
import { jsonb } from "drizzle-orm/pg-core";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export const profileInfo = pgTable("profile_info", {
  id: serial("id").primaryKey(),
  metadata: jsonb("metadata"),
  user_id: integer("user_id").references(() => users.id),
});
