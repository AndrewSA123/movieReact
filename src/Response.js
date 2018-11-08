import React, { Component } from 'react';

class Response extends Component {

myFunction = () => {

  var searchTerm = document.getElementById('inputText').value;
  var url = "http://www.omdbapi.com/?t=" + searchTerm + "&apikey=5f41a62d";
  const axios = require('axios');
  
}

constructor(){
  super();
  this.state = {
    imgSrc:  "",
    movieTitle: "",
    movieDesc: ""
  }

}

  render() {
    return (
      <div className="Response">
      <img id="movieImg" src={this.state.imgSrc}/>
      <h1 id="movieTitle">{this.state.movieTitle}</h1>
      <p id="movieDesc">{this.state.movieDesc}</p>
      </div>
    );
  }
}

export default Response;
