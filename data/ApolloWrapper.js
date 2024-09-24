"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { getCookie } from 'cookies-next';
import { setContext } from '@apollo/client/link/context';

const createAuthLink = () => {
  return new ApolloLink((operation, forward) => {
    // Get the token from cookies
    const token = getCookie("accessToken"); 
    console.log(token)
    // Use the setContext method to set the headers
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });

    return forward(operation).map(response => {
      // Handle response and log errors if any
      if (response.errors) {
        console.error("GraphQL Errors:", response.errors);
        // Here you can also throw an error or handle it in a specific way
      }
      return response;
    });
  });
};

function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    fetchOptions: { cache: "no-store" },
  });

  const authLink = createAuthLink();

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : ApolloLink.from([authLink, httpLink]), // Include auth link in client setup
  });
}

export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}