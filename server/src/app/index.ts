import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";
import { User } from "./user";
// Create an Express app instance
const app = express();

export async function initserver() {
  const graphqlServer = new ApolloServer({
    typeDefs: `
    ${User.types}
     type Query {
 ${User.queries}
}

      
   `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
    },
  });

  // Start Apollo Server
  await graphqlServer.start();

  // Use middleware for GraphQL
  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressMiddleware(graphqlServer)
  );

  // Return the Express app instance
  return app;
}
