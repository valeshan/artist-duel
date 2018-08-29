// Imports: Express
const express = require('express');
const app = express();

const { ApolloEngine } = require("apollo-engine");
const { apolloEngineKey } = require('./config/config');

// Imports: GraphQL
const SERVER = require('./schema.js');
// Middleware: GraphQL
SERVER.applyMiddleware({
  app
});
// Express: Port
const PORT = 4000 || process.env;

const engine = new ApolloEngine({
  apiKey: apolloEngineKey
});

// // Express: Listener
// app.listen(PORT, () => {
//   console.log(`The server has started on port: ${PORT}`);
//   console.log(`http://localhost:${PORT}/graphql`);
// });

// Call engine.listen instead of app.listen(port)
engine.listen({
  port: 4000,
  expressApp: app
});
