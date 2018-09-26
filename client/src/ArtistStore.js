const { runInAction, extendObservable, action } = require("mobx");
const { request } = require('graphql-request');

const query = `{
  artist(name: "Cher") {
    name
    url
  }
}`

export default extendObservable(this, {
  artist: [],
  loadArtist: action(async ()=>{
    //fetch data from api and update artist
    const response = await request('http://localhost:4000/', query);
    const body = await response.json();
    runInAction(
      ()=>{
        this.artist = body;
        console.log(this.artist);
    }
  )
  })
})
