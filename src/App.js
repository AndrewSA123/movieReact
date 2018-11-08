import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {

myFunction = () => {
  var searchTerm = document.getElementById('inputText').value;
  var url = "http://www.omdbapi.com/?t=" + searchTerm + "&apikey=5f41a62d";



 axios.get(url).then(function(response) {
  document.getElementById('ChangeMe').innerHTML = JSON.stringify(response.data);
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
          <button id="searchButton" className="btn btn-primary" onClick={this.myFunction}>Search Button</button>

          <p id="ChangeMe"></p>
        </header>
      </div>
    );
  }
}

export default App;
