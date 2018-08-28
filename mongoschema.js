const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: String!
    name: String!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser (name: String!): User!
  }

`;


module.exports = typeDefs;
