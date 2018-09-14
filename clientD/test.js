const { request } = require('graphql-request');

const query = `{
  artist(name: "Cher") {
    name
    url
  }
}`

request('http://localhost:4000/', query).then(data => console.log(data))


process.on('unhandledRejection', (reason) => {
    console.log('Reason: ' + reason);
});
