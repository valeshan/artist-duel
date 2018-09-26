import React, { Component } from 'react';
const { request } = require('graphql-request');

const query = `{
  artist(name: "Cher") {
    name
    url
  }
}`

export default class SearchArtist extends Component {

  constructor(){
    super();
    this.state = {
      artistName: ''
    }
  }
  // state = {
  //   response: ''
  // };
  //
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res }))
  //     .catch(err => console.log(err));
  // }
  //
  // callApi = async () => {
  //   const response = await request('http://localhost:4000/', query);
  //   const body = await response.json();
  //
  //   if (response.status !== 200) throw Error(body.message);
  //
  //   return body;
  // };

onInputChange = (artistName) => {
  this.setState({ artistName })
  return artistName;
}

 handleSubmit = async (e) => {
  e.preventDefault();
  // access to form values
  // make api calls
  console.log(this.state.artistName);
  const response = await request('http://localhost:4000/', query);
  const body = await response.json();
  console.log(body);
  // set the new state
}
// bind
  render(){
    return (
        <div>
        hi {this.props.name}
                <form method="post" onSubmit = { this.handleSubmit }>
                    <input type="text"  onChange = {e=> this.onInputChange(e.target.value)} name="Artist" placeholder="Artist Name"/>
                    <input type="submit" value="Search"/>
                </form>
        </div>
    )
  }
}
