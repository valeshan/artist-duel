const express = require('express');
// const graphql = require('graphql');
// const graphqlHTTP = require('express-graphql');

const { ApolloServer, gql } = require('apollo-server-express');
const app = express();

const schema = require('./schema');

// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));


const server = new ApolloServer({ schema });


// const port = process.env.PORT || 4000;

// app.listen(port, console.log(`listening to port ${port}`))


// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

server.applyMiddleware({ app }); // app is from an existing express app

// app.listen({ port: process.env.PORT || 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// )

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
