// graphql.ts (exports the server method)
import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { getCookie } from "../utils/cookie";


// Create an HTTP link with the GraphQL API endpoint
const httpLink = new HttpLink({
  uri: `http://localhost:4000/graphql`,
  // Disable result caching
  fetchOptions: { cache: "no-store" },
});

// Create an authentication link
const authLink = setContext(async () => {
  // Get access token stored in cookie
  const token = await getCookie("accessToken");
  console.log(token)

  // If the token is not defined, return an empty object
  if (!token?.value) return {};

  // Return authorization headers with the token as a Bearer token
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
});

/**
 * Apollo Client
 *
 * @see https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/
 */
// eslint-disable-next-line import/prefer-default-export
export const { getClient } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: authLink.concat(httpLink),
    }),
);

