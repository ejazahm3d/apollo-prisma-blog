import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import { Posts } from "./components/posts";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>
          My First Apollo app{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h2>
        <Posts />
      </div>
    </ApolloProvider>
  );
}

export default App;
