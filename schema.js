// Imports: GraphQL
const { ApolloServer } = require('apollo-server-express');
// Imports: GraphQL TypeDefs & Resolvers
const typeDefs = require('./types.js');
const resolvers = require('./resolvers.js');
const mongoose = require('mongoose');
// GraphQL: Schema

mongoose.connect('mongodb://localhost/artist-duel');

const User = mongoose.model('User', { name: String, email: String });

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  context: { User },
  tracing: true,
  cacheControl: true,
  engine: false,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});
// Exports
module.exports = SERVER;
