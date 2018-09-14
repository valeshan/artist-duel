const { gql } = require("apollo-server-express");

const typeDefs = gql`
directive @rest(url: String) on FIELD_DEFINITION

  type User {
    _id: String!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [User!]!
    Artist(name: String!) : Artist!
  }

  type Mutation {
    createUser (name: String!, email: String! @unique): User!
  }

`;


module.exports = typeDefs;
