const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: String!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser (name: String!, email: String! @unique): User!
  }

`;


module.exports = typeDefs;
