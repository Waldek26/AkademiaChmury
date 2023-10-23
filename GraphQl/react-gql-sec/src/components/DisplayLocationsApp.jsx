import DisplayLocations from "./DisplayLocations";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

function DisplayLocationsApp() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <br />
        <DisplayLocations />
      </div>
    </ApolloProvider>
  );
}

export default DisplayLocationsApp;
