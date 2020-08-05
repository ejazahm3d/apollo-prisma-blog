import { Context } from "nexus-plugin-prisma/dist/schema/utils";
import { Post } from "nexus-plugin-prisma/client";

const fetchAllPosts = async ({ db }: Context, id: string): Promise<Post[]> => {
  const posts = await db.post.findMany({ where: { authorId: id } });
  if (posts === null) {
    throw new Error("No posts found");
  }
  return posts;
};

export default { fetchAllPosts };
