import React, { Component } from 'react';

class Display extends Component{
    render(){
        return(
            <React.Fragment>
                <p>{this.props.data}</p>
            </React.Fragment>
        );
    }
}

export default Display;