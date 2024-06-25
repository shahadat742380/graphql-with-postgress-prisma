"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = `#graphql
   getUsers(limit: Int): [User]!
    getUserById(id: ID!): User
`;
