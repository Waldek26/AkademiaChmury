import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { useState } from "react";
import Dogs from "./Dogs";
import DogPhoto from "./DogPhoto";

function DogsApp() {
  const [selectedDog, setSelectedDog] = useState(null);

  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Building Query components 🚀</h2>
        {selectedDog && <DogPhoto breed={selectedDog} />}
        <Dogs onDogSelected={onDogSelected} />
      </div>
    </ApolloProvider>
  );
}

export default DogsApp;
