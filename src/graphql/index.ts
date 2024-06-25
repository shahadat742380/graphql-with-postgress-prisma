import { ApolloServer } from "@apollo/server";
import { User } from "./users";

async function createApolloGraphqlServer() {
  const server = new ApolloServer({
    typeDefs: `
             ${User.typeDefs}
              
            type Query {
               hello: String
               ${User.queries}
            }
    
            type Mutation {
                ${User.mutations}
            }
        `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
      },
    },
  });

  return server;
}

export default createApolloGraphqlServer;
