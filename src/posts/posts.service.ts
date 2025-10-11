import { Inject, Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { DRIZZLE } from "src/drizzle/drizzle.module";
import type { DrizzleDb } from "src/drizzle/type/drizzle";

@Injectable()
export class PostsService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDb) {}
  create(createPostDto: CreatePostDto) {
    return "This action adds a new post";
  }

  async findAll() {
    // return await this.db.select().from(posts);
    return await this.db.query.posts.findMany({
      with: {
        author: {
          with: {
            userToGroup: {
              with: {
                group: true,
              },
            },
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
