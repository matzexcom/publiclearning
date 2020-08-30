import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

import { PostList } from "./components/PostList";

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: "5px" }}>
        <h3>My Blog</h3>
        <div>Posts are loaded here</div>
        <PostList />
      </div>
    </ApolloProvider>
  );
}

export default App;
