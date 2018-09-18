import  { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} from 'graphql';
import { LastFMapiKey } from './../../../config/config';
import { get_from_API } from  './../../helper/apiclient';
import  { video_search } from  './../../helper/youtube';

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
      youtube_url : {
        type: GraphQLString,
        resolve: async (artist) => {
          const name = artist.name;
          const track_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&limit=1&api_key=${LastFMapiKey}&format=json`;
          const track_list = (await get_from_API(track_URL)).toptracks.track;
          let top_track_name = track_list[0].name;
          artist.video_url = await video_search(`${top_track_name} ${name}`);
          return artist.video_url;
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
        resolve: async (artist) =>{
          const name = artist.name;
          const track_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&limit=5&api_key=${LastFMapiKey}&format=json`;
          const track_list = (await get_from_API(track_URL)).toptracks.track;
          return track_list;
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
