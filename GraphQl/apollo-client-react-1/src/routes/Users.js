// npm run dev
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Outlet } from "react-router-dom";
import UserList from "../components/UserList";
import { LOAD_USERS } from "../GraphQL/Queries";
import { Suspense } from "react";
import UserListLoading from "../components/UserListLoading";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQl erro ${message}`);
      return null;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function Users() {
  return (
    <>
      <Outlet />
      <main>
        <ApolloProvider client={client}>
          <Suspense fallback={<UserListLoading />}>
            <UserList />
          </Suspense>
        </ApolloProvider>
      </main>
    </>
  );
}

export default Users;

const USER_LIMIT = 5;

export async function loader({ request, params }) {
  const url = new URL(request.url);

  let limitParam = url.searchParams.get("limit");
  if (!limitParam) limitParam = USER_LIMIT;

  console.log("params: " + limitParam);

  const queryResponse = await client.query({
    query: LOAD_USERS,
    variables: {
      limit: parseInt(limitParam),
    },
  });

  // Return value is thrown away since we are now relying on the cache for the data
  // const data = [
  //   {
  //     id: 1,
  //     firstName: "Phineas",
  //     lastName: "Franciottoi",
  //     email: "pfranciottoi0@hostgator.com",
  //     password: "y0pWrGzmDz",
  //   },
  //   {
  //     id: 2,
  //     firstName: "Mikel",
  //     lastName: "Gregoli",
  //     email: "mgregoli1@amazon.de",
  //     password: "G0VfMCL",
  //   },
  //   {
  //     id: 3,
  //     firstName: "Moira",
  //     lastName: "Mazzilli",
  //     email: "mmazzilli2@163.com",
  //     password: "3GgdWoOfT",
  //   },
  // ];

  return queryResponse.data.getAllUsers;
}
