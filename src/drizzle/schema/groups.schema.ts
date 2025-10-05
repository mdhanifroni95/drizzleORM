import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { primaryKey } from "drizzle-orm/pg-core";
import { index } from "drizzle-orm/pg-core";

export const groups = pgTable("groups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

//This the joint table
export const usersToGroups = pgTable(
  "users_to_groups",
  {
    user_id: integer("id").references(() => users.id),
    group_id: integer("group_id").references(() => groups.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.user_id, table.group_id] }),
    user_id_index: index("user_id_index").on(table.user_id),
  }),
);
