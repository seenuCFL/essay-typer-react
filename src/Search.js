import React, { Component } from 'react';


class Search extends Component{
    render(){
        return(
            <React.Fragment>
                <input type='search' onChange={this.props.setInput}></input>
                <button type='submit' onClick={this.props.wikiSearch}>submit</button>
            </React.Fragment>
        );
    }
}

export default Search;