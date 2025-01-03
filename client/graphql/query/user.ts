import { graphql } from "@/gql";

const verifyUserGoogleToken = graphql(`
  #graphql
  query verifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);
