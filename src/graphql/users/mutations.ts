export const mutations = `#graphql

    createUser(firstName: String!, lastName: String!, email: String!, password: String!): String

    deleteUser(id: ID!): Boolean!
    
     updateUser(id: ID!, firstName: String, lastName: String, email: String, profileImageURL: String): User
`;