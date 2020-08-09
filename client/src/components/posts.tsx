import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GetAllPostsQuery, Post } from "../generated/graphql";
import BlogItem from "./blocks/BlogItem";

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
      <section className="container columns is-vcentered is-centered">
        {data?.posts.map((post) => (
          <div className="column pt-6 px-6 py-6">
            <BlogItem item={post as Post} />
          </div>
        ))}
      </section>
    </div>
  );
};
