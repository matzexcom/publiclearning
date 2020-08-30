import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
const ITEMS_QUERY = gql`
  {
    allPosts {
      data {
        _id
        title
      }
    }
  }
`;

export function PostList() {
  const { data, loading } = useQuery(ITEMS_QUERY);
  if (loading) {
    return "Loading...";
  }
  return (
    <ul>
      {data.allPosts.data.map((item) => {
        return <li key={item._id}>{item.title}</li>;
      })}
    </ul>
  );
}
