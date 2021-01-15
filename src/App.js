import React, { Component } from 'react';
import Search from './Search';
import Display from './Display';

const text = `The purpose of this book is to give you a thorough introduction to competitive programming. It is assumed that you already know the basics of programming,
but no previous background in competitive programming is needed.
The book is especially intended for students who want to learn algorithms
and possibly participate in the International Olympiad in Informatics (IOI) or in
the International Collegiate Programming Contest (ICPC). Of course, the book is
also suitable for anybody else interested in competitive programming.
It takes a long time to become a good competitive programmer, but it is also
an opportunity to learn a lot. You can be sure that you will get a good general
understanding of algorithms if you spend time reading the book, solving problems
and taking part in contests.
The book is under continuous development. You can always send feedback on
the book to ahslaaks@cs.helsinki.fi.`;

class App extends Component{
  constructor(){
    super();
    this.state = {
      searchKey: '',
      currentPosition: 0,
      word: ''
    }
  }

  setInput = (event) => {
    this.setState({searchKey:event.target.value});
  }

  wikiSearch = () => {    
    this.setState({currentPosition:0})
  }

  printText = () => {
    let x='';
    let ran = Math.floor(Math.random()*5)+5;
    for(let i=this.state.currentPosition; i<ran+this.state.currentPosition ;i++){
      x+=text[i];
    }
    this.setState(Object.assign(this.state, {currentPosition: this.state.currentPosition+ran}))
    this.setState(Object.assign(this.state, {word:this.state.word + x}))
  }

  render(){
    return(
      <React.Fragment>
        {/* <h1>Essay-Typer</h1>
        <Search setInput={this.setInput} wikiSearch={this.wikiSearch}/><br></br> */}
        <Display data={this.state.word} printText={this.printText} />
      </React.Fragment>
    );
  }
}

export default App;