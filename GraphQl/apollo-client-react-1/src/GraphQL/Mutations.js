import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: string!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;
