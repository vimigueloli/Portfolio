import { ApolloClient, InMemoryCache } from "@apollo/client";

export const clientGQL = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers:{
    "Authorization": `bearer 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`
  }
});