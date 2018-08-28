// const express = require('express');
// // const graphql = require('graphql');
// // const graphqlHTTP = require('express-graphql');
//
// const { ApolloServer, gql } = require('apollo-server-express');
// const app = express();
//
// const schema = require('./schema');
//
// const server = new ApolloServer({ schema });
//
// const port = process.env.PORT || 4000;
//
// // app.listen(port, console.log(`listening to port ${port}`))
//
//
// // server.listen().then(({ url }) => {
// //   console.log(`🚀  Server ready at ${url}`);
// // });
//
// server.applyMiddleware({ app }); // app is from an existing express app
//
// app.listen({ port }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// )

/********************/


// Import ApolloEngine
const { ApolloEngine } = require("apollo-engine");
const { ApolloServer, gql } = require("apollo-server-express");
const { apolloEngineKey } = require('./config/config');
const mongoose = require('mongoose');

const express = require("express");
const schema = require('./schema');

const typeDefs = require('./mongoschema');
const resolvers = require('./resolvers');

mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', { name: String });

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // schema,
  context: { User },
  tracing: true,
  cacheControl: true,
  engine: false
});

const app = express();

// All of your GraphQL middleware goes here
server.applyMiddleware({ app });

const engine = new ApolloEngine({
  apiKey: apolloEngineKey
});

// Call engine.listen instead of app.listen(port)
engine.listen({
  port: 4000,
  expressApp: app
});
