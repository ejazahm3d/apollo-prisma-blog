import { objectType, extendType, idArg } from "@nexus/schema";
import PostService from "../services/post";
export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.content();
    t.model.slug();
    t.model.author();
  },
});

export const PostQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("posts", {
      type: Post,
      args: {
        id: idArg({ required: true }),
      },
      //@ts-ignore
      resolve: (root, { id }, ctx): any => {
        return PostService.fetchAllPosts(ctx, id);
      },
    });
  },
});
