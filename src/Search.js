import React, { Component } from 'react'

class Search extends Component{
    render(){
        return(
            <div className="col-sm-6 col-sm-offset-3">
                <form>
                    <input value={termUserSearchedFor} type="text" placeholder="Search..."/>
                    <button className="btn btn-primary" type="submit">SEARCH</button>
                </form>
            </div>
        )
    }
}

export default Search