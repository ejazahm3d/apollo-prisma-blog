import React from "react";
import Layout from "../components/layout/layout";
import { Posts } from "../components/posts";
import Hero from "../components/blocks/Hero";

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <h2>
        My First Apollo app{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      <Posts />
    </div>
  );
};

export default Home;
