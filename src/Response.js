import React, { Component } from 'react';

class Response extends Component {



constructor(props){
  super(props);
  this.state = {
    imgSrc:  this.props.imgSrc,
    movieTitle: this.props.movieTitle,
    movieDesc: this.props.movieDesc
  }

}

updateButton(){
    this.setState({
    imgSrc:  this.props.imgSrc,
    movieTitle: this.props.movieTitle,
    movieDesc: this.props.movieDesc
});
}

  render() {
    return (
      <div className="Response">
      <img id="movieImg" src={this.state.imgSrc}/>
      <h1 id="movieTitle">{this.state.movieTitle}</h1>
      <p id="movieDesc">{this.state.movieDesc}</p>
      <button id="updateButton" onClick={this.updateButton}>Update</button>
      </div>
    );
  }
}

export default Response;
