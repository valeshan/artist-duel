import  { GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql';
import { LastFMapiKey } from './../../config/config';

import needle from 'needle';

import artist from './../model/core/artist';
import { get_from_API } from  './../helper/apiclient';

const api_query = new GraphQLObjectType({
  name : 'api_query',
  description:  'This is the root query',
  fields: () => {
    return {
      artist: {
        type: artist,
        args: {
          name: {
            description: 'name of the artist',
            type: GraphQLString
          }
        },
        resolve: async (root, args) => {
          console.log(args);
          const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&api_key=${LastFMapiKey}&format=json&artist=${args.name}`;
          const data =  await get_from_API(URL);
          return data.artist;
        }
      }
    }
  }
})


export default api_query;
