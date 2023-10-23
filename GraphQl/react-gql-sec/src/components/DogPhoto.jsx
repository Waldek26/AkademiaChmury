import { useQuery, gql } from "@apollo/client";

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
      // pollInterval: 500
    }
  );

  if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return null;
  if (error) return `Error!: ${error}`;

  return (
    <div>
      <div>
        <img
          alt=""
          src={data.dog.displayImage}
          style={{ height: 100, width: 100 }}
        />
      </div>
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}

export default DogPhoto;
