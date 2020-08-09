import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GetAllPostsQuery } from "../generated/graphql";

interface Props {}
const getAllPosts = gql`
  query getAllPosts {
    posts {
      id
      title
      content
      slug
      author {
        id
        name
      }
    }
  }
`;

export const Posts: React.FC<Props> = (props) => {
  const { data, loading, error } = useQuery<GetAllPostsQuery>(getAllPosts);
  if (error) console.log(error);
  if (loading) return <div>Loading</div>;

  return (
    <div>
      {data?.posts.map((post) => (
        <div key={post.id}>
          {post.title}
          <div>{post.content}</div>
        </div>
      ))}
    </div>
  );
};
