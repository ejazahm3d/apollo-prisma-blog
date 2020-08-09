import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./app.scss";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
