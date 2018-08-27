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
const { ApolloServer } = require("apollo-server-express");
const { apolloEngineKey } = require('./config/config');

const express = require("express");
const schema = require('./schema');

// Initialize Apollo Server
const server = new ApolloServer({
  schema,
  tracing: true,
  cacheControl: true,
  // We set `engine` to false, so that the new agent is not used.
  engine: false
});


// Initialize your Express app like before
const app = express();

// All of your GraphQL middleware goes here
server.applyMiddleware({ app });

// Initialize engine with your API key. Alternatively,
// set the ENGINE_API_KEY environment variable when you
// run your program.
const engine = new ApolloEngine({
  apiKey: apolloEngineKey
});

// Call engine.listen instead of app.listen(port)
engine.listen({
  port: 4000,
  expressApp: app
});
