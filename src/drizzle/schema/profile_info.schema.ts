import { integer } from "drizzle-orm/pg-core";
import { jsonb } from "drizzle-orm/pg-core";
import { pgTable, serial } from "drizzle-orm/pg-core";
import { users } from "./users.schema";

export const profileInfo = pgTable("profile_info", {
  id: serial("id").primaryKey(),
  metadata: jsonb("metadata"),
  user_id: integer("user_id").references(() => users.id),
});
