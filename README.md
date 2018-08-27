# artist-duel

This app compares 2 music artists against their top tracks and the total number of listeners and play counts they've had so far. The most popular artist song is also provided through an embedded YouTube player. It will also authenticate with a youtube oauth, and provide a user history of the 5 most recent duels. The APIs accessed in this app are from Last.Fm and YouTube.

To get started, go to the selected directory within your terminal and enter ```npm install``` to install the required packages. Then inside your text editor, open the project files and create a ```config``` folder first, and within that folder, add in a ```config.js``` file. Then within your config file, copy and paste the following and add in your API key from Last.Fm (YouTube component not completed yet so API key not needed).

```
const config = {
  apiKey: 'API-KEY-HERE'
}

module.exports = config
```

The app uses GraphQL to access the REST APIs. Currently the GraphiQL IDE is available through ```localhost:4000/graphql``` with the schema also available for reference.
