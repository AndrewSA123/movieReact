import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Response from './Response.js';


class App extends Component {





generateTable(){

var searchTerm = document.getElementById('inputText').value;
var url = "http://www.omdbapi.com/?t=" + searchTerm + "&apikey=5f41a62d";
axios.get(url).then(response => {
  
  var res =  response.data;
  console.log(res);
var title = res.Title;
var image = res.Poster;
var desc = res.Plot;

ReactDOM.render(<Response imgSrc={image} movieTitle={title} movieDesc={desc}/>, document.getElementById('App-Top'));

});






}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>Movie API integration</h1>
          <p>Movie Title</p>
          <input id="inputText" type="text" name="Movie title"></input>
          <br />
          <br />
          <button id="searchButton" className="btn btn-primary" onClick={this.generateTable}>Search Button</button>

          <p id="ChangeMe"></p>
        </header>
      </div>
    );
  }
}

export default App;
