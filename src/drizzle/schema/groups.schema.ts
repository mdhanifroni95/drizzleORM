import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { primaryKey } from "drizzle-orm/pg-core";
import { index } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const groups = pgTable("groups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

//This the joint table
export const usersToGroups = pgTable(
  "users_to_groups",
  {
    user_id: integer("user_id").references(() => users.id),
    group_id: integer("group_id").references(() => groups.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.user_id, table.group_id] }),
    user_id_index: index("user_id_index").on(table.user_id),
  }),
);

export const userToGroupRelations = relations(usersToGroups, ({ one }) => ({
  user: one(users, {
    fields: [usersToGroups.user_id],
    references: [users.id],
  }),

  group: one(groups, {
    fields: [usersToGroups.group_id],
    references: [groups.id],
  }),
}));
