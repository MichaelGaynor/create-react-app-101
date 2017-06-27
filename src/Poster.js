import React, { Component } from "react";

class Poster extends Component{
    render(){
        var imagePath = 'http://image.tmdb.org/t/p/w300'+this.props.poster.poster_path;
        return(
            <div className="single-movie col-sm-3">
                <h1>Movie Here</h1>
                <img src={imagePath}/>
            </div>
        )
    }
}

export default Poster;