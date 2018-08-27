const fetch = require('node-fetch');
const { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString } = require('graphql');
const { apiKey } = require('./config/config');

const trackType = new GraphQLObjectType({
  name: 'Track',
  description: '...',
  fields: ()=>({
    title: {
      type: GraphQLString,
      resolve: data => data.name
    },
    listenerCount: {
      type: GraphQLInt,
      resolve: data => data.listeners
    },
    playCount: {
      type: GraphQLInt,
      resolve: data => data.playcount
    }
  })
});

const artistType = new GraphQLObjectType({
  name: 'Artist',
  description: '...',

  fields: ()=>({
    name: {
      type: GraphQLString,
      resolve: data => data.artist.name
    },
    image: {
      type: GraphQLString,
      resolve: data => data.artist.image[2]['#text']
    },
    listenerCount: {
      type: GraphQLString,
      resolve: data => data.artist.stats.listeners == 0? "Sorry, the data isn't available" : data.artist.stats.listeners
    },
    playCount: {
      type: GraphQLString,
      resolve: data => data.artist.stats.playcount == 0? "Sorry, the data isn't available" : data.artist.stats.playcount
    },
    topTracks: {
      type: new GraphQLList(trackType),
      resolve: data => {
        const name = [data.artist.name];
        return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&limit=5&api_key=${apiKey}&format=json`)
                       .then(res => res.json())
                       .then(res => res.toptracks.track)
                  }
    }
  })
})


module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',
    fields: () => ({
      artist:{
        type: artistType,
        args: {
          name: { type: GraphQLString }
        },
        resolve: (root, args) => fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${args.name}&api_key=${apiKey}&format=json`)
             .then(res => res.json())
      }
    })
  })
})
