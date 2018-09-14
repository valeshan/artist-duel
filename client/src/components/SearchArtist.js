import React, { Component } from 'react';


export default class SearchArtist extends Component {

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

methodname() {
  /// access to form values
  // make api calls
  // set the new state
}
bind
  render(){
    return (
        <div>
        hi {this.props.name}
                <form method="post" action="this.methodname()">
                    Artist Name:<br/>
                    <input type="text" name="Artist"/><br/>
                    <input type="submit" value="Search"/>
                </form>
        </div>
    )
  }
}
