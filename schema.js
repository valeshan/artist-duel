// Imports: GraphQL
const { ApolloServer } = require('apollo-server');
// Imports: GraphQL TypeDefs & Resolvers
const typeDefs = require('./types.js');
const resolvers = require('./resolvers.js');
const mongoose = require('mongoose');

const { apolloEngineKey } = require('./config/config');
// GraphQL: Schema

mongoose.connect('mongodb://localhost/artist-duel');

const User = mongoose.model('User', { name: String, email: String });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { User },
  tracing: true,
  cacheControl: true,
  engine: {
    apiKey: apolloEngineKey
  },
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// Exports
module.exports = server;
