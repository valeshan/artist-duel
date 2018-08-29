// Import ApolloEngine
const { ApolloEngine } = require("apollo-engine");
// const { ApolloServer, gql } = require("apollo-server-express");
const { apolloEngineKey } = require('./config/config');
// const mongoose = require('mongoose');

// const express = require("express");
// const schema = require('./schema');

// const typeDefs = require('./mongoschema');
// const resolvers = require('./resolvers');

const app = require('./server');
// mongoose.connect('mongodb://localhost/artist-duel');

// const User = mongoose.model('User', { name: String });

// Initialize Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   // schema,
//   context: { User },
//   tracing: true,
//   cacheControl: true,
//   engine: false
// });

// All of your GraphQL middleware goes here
// server.applyMiddleware({ app });

const engine = new ApolloEngine({
  apiKey: apolloEngineKey
});

// Call engine.listen instead of app.listen(port)
engine.listen({
  port: 4000,
  expressApp: APP
});
