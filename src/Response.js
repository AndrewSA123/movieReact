import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class Response extends Component {

constructor(props){
    super(props);
  var title;
  var img;
  var plot;


  this.state = {
    imgSrc: img,
    movieTitle: title,
    movieDesc: plot
  }

}

updateButton(event){

}

searchButton = () => { 
  var searchTerm = document.getElementById('inputText').value;
  var url = "http://www.omdbapi.com/?t=" + searchTerm + "&apikey=5f41a62d";
  axios.get(url).then(response => this.setState({
      imgSrc: response.data.Poster,
      movieTitle: response.data.Title,
      movieDesc: response.data.Plot
    }));
}

getAllMovies(){
  var searchTerm = document.getElementById('inputText').value;
  var url = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=5f41a62d";
    axios.get(url).then(response => this.setState({
      imgSrc: response.data.Poster,
      movieTitle: response.data.Title,
      movieDesc: response.data.Plot
    }));
}

  render() {
    return (
      <div className="Response">
      <button id="searchButton" className="btn btn-primary" onClick={this.searchButton}>Search Button</button>
      <button id="getAllbutton" className="btn btn-success" onClick={this.getAllMovies}>Search All</button>
      <br />
      <hr />
      <img id="movieImg" src={this.state.imgSrc}/>
      <h1 id="movieTitle">{this.state.movieTitle}</h1>
      <p id="movieDesc">{this.state.movieDesc}</p>

      
      
      </div>
    );
  }
}

export default Response;
