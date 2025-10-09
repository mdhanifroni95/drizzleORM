ALTER TABLE "users_to_groups" RENAME COLUMN "id" TO "user_id";--> statement-breakpoint
ALTER TABLE "users_to_groups" DROP CONSTRAINT "users_to_groups_id_users_id_fk";
--> statement-breakpoint
DROP INDEX "user_id_index";--> statement-breakpoint
ALTER TABLE "users_to_groups" DROP CONSTRAINT "users_to_groups_id_group_id_pk";--> statement-breakpoint
ALTER TABLE "users_to_groups" ADD CONSTRAINT "users_to_groups_user_id_group_id_pk" PRIMARY KEY("user_id","group_id");--> statement-breakpoint
ALTER TABLE "users_to_groups" ADD CONSTRAINT "users_to_groups_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "user_id_index" ON "users_to_groups" USING btree ("user_id");