import React, { Component } from 'react';
import './Display.css';

class Display extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="heading">
                    <h1>Panda</h1>
                    <h2>Small article on panda</h2>
                </div>
                <div className="magic">
                    <textarea id="ta" autoFocus readOnly onKeyPress={this.props.printText} value={this.props.data}></textarea>
                </div>
            </React.Fragment>
        );
    }
}

export default Display;