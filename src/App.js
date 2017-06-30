import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';
import Search from './Search';

class App extends Component {

    constructor(props) {
        super(props);

        /* We define state variables by putting them in the constructor.
        We define it as an object on this.state. */

        this.state = {
            moviePosters: []
        }
    }

    componentDidMount() {
        console.log("I'm in the DOM")
        var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
        $.getJSON(url, (movieData)=>{

            /* Changing the state will trigger a re-render */

            this.setState({
                moviePosters: movieData.results
            })

            /*BAD-> this.state.moviePosters = movieData.results is VERY BAD.*/

        })
    }

    render() {
        var postersArray = [];

        /* First time through render this will be an empty array.
        Second time through (after componentDidMount runs) it won't be empty. */

        this.state.moviePosters.map((poster,index)=>{
            postersArray.push(<Poster poster={poster} key={index}/>)
            return
        });

        return (
            <div className="App">
                <h1>This is the movie app (again)</h1>
                <Search/>
                {postersArray}
            </div>
        );
    }
}

export default App;
