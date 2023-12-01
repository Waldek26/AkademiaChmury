import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query GetUsers($limit: Int = 3) {
    getAllUsers(limit: $limit) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;
