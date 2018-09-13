import  { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} from 'graphql';
import { LastFMapiKey } from './../../../config/config';
import { get_from_API } from  './../../helper/apiclient';



const artist = new GraphQLObjectType({
  name: 'artist',
  description: 'this represent a artist',
  fields: () => {
    return {
      name : {
        type: GraphQLString,
        resolve: (artist) => {
          return artist.name;
        }
      },
      url : {
        type: GraphQLString,
        resolve: (artist) => {
          return artist.url;
        }
      },
      stats : {
        type: stats,
        resolve: (artist) => {
          return artist.stats;
        }
      },
      image: {
        type: image,
        resolve: (artist) => {
          return artist.image
        }
      },
      topTracks: {
        type: new GraphQLList(track),
        resolve: (artist) =>{
          const name = artist.name;
          const trackURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&limit=5&api_key=${LastFMapiKey}&format=json`;
          return get_from_API(trackURL)
                 .then(res => res.toptracks.track)
        }
      }
    }
  }
});

const stats = new GraphQLObjectType({
  name: 'stats',
  description: 'this represent artist stats',
  fields: () => {
    return {
      listeners : {
        type: GraphQLString,
        resolve: (stats) => {
          return stats.listeners;
        }
      },
      playcount : {
        type: GraphQLString,
        resolve: (stats) => {
          return stats.playcount;
        }
      }
    }
  }
});

const image = new GraphQLObjectType({
  name: 'image',
  description: 'this represents artist image',
  fields: ()=>{
    return {
      image: {
        type: GraphQLString,
        resolve: (image) => {
          return image[2]['#text']
        }
      }
    }
  }
});

const track = new GraphQLObjectType({
  name: 'track',
  description: 'this represents artist tracks',
  fields: ()=>{
    return {
        title: {
        type: GraphQLString,
        resolve: (track) => track.name
      },
      listenerCount: {
        type: GraphQLInt,
        resolve: (track) => track.listeners
      },
      playCount: {
        type: GraphQLInt,
        resolve: (track) => track.playcount
      }
    }
  }
});

export default artist;
