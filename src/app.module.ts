import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DrizzleModule } from "./drizzle/drizzle.module";
import { PostsModule } from "./posts/posts.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    DrizzleModule,
    PostsModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
