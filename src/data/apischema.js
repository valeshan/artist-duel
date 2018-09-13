import { GraphQLSchema } from 'graphql';

import api_query from './query';

const json_schema = {
  query : api_query
};

exports.api_schema = new GraphQLSchema(json_schema);
