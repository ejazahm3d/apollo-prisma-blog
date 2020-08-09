import { Context } from "nexus-plugin-prisma/dist/schema/utils";
import { Post } from "nexus-plugin-prisma/client";

async function findById({ db }: Context, id: string): Promise<Post> {
  const post = await db.post.findOne({ where: { id } });
  if (post === null) {
    throw new Error("user not found");
  }
  return post;
}

const fetchAllPosts = async ({ db }: Context): Promise<Post[]> => {
  const posts = await db.post.findMany();
  if (posts === null) {
    throw new Error("No posts found");
  }
  return posts;
};

interface PostData {
  title: string;
  content: string;
  slug: string;
  authorId: string;
}

function createOne(ctx: Context, data: PostData): Promise<Post> {
  return ctx.db.post.create({
    data: {
      title: data.title,
      content: data.content,
      slug: data.slug,
      author: {
        connect: {
          id: data.authorId,
        },
      },
    },
  });
}
export default { fetchAllPosts, createOne, findById };
