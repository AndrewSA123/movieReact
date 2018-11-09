import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Response from './Response.js';


class App extends Component {





generateTable(){

  ReactDOM.render(<Response searchTerm={document.getElementById('inputText').value}/>, document.getElementById('App-Top'));
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
          <Response />

          <p id="ChangeMe"></p>
        </header>
      </div>
    );
  }
}

export default App;
