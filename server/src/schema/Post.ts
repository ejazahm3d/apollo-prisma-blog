import { objectType, extendType, idArg, stringArg } from "@nexus/schema";
import PostService from "../services/post";
import { User } from "./User";

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
    t.field("post", {
      type: Post,
      args: {
        id: idArg({ required: true }),
      },
      resolve: (root, { id }, ctx) => {
        return PostService.findById(ctx, id);
      },
    });
    t.list.field("posts", {
      type: Post,
      resolve: (root, _, ctx): any => {
        return PostService.fetchAllPosts(ctx);
      },
    });
  },
});

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createPost", {
      type: Post,
      args: {
        title: stringArg({ required: true }),
        content: stringArg({ required: true }),
        slug: stringArg({ required: true }),
        authorId: idArg({ required: true }),
      },
      resolve: (root, postData, ctx) => {
        return PostService.createOne(ctx, postData);
      },
    });
  },
});
