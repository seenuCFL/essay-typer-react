import React, { Component } from 'react';
import './Search.css';

class Search extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="support"></div>
                <div className="container">
                    <h1 id="title" className="flex-item">Essay-Typer</h1>
                    <input id="input" className="flex-item" type='search' onChange={this.props.setInput}></input>
                    <button className="flex-item" type='submit' onClick={this.props.wikiSearch}>submit</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Search;