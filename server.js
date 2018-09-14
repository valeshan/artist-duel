// Imports: Express
import express from 'express';
import GraphHTTP from 'express-graphql';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/artist-duel');

const Artist = mongoose.model('Artist', { name: String});

const app = express();

const api_schema = require('./src/data/apischema').api_schema;

app.use('/', GraphHTTP({
  schema: api_schema,
  context: { Artist },
  pretty: true,
  graphiql: true
}))

// Call engine.listen instead of app.listen(port)
app.listen(4000, () => {
  console.log('app is listening on port 4000');
});
