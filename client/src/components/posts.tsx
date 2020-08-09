import React from "react";
import { gql, useQuery } from "@apollo/client";

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

export const Posts = (props: Props) => {
  const { data, loading, error } = useQuery(getAllPosts);
  if (error) console.log(error);
  if (loading) return <div>Loading</div>;
  console.log(data);
  return (
    <div>
      {data.posts.map((post: any) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
};
