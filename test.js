var gapi = require('googleapis');

const api_key = 'AIzaSyCH9V8-g4T6ugLQkZvXb7SN1hSICjsMhxA'
let youtube = gapi.youtube_v3({
  version: 'v3',
  auth: api_key
});
console.log('connected');
