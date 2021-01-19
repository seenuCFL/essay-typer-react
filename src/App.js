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
      word: '',
      input: false
    }
  }

  setInput = (event) => {
    this.setState(Object.assign(this.state, {searchKey:event.target.value}));
  }


  wikiSearch = () => {   
    
    this.setState({currentPosition:0});
    if(this.state.searchKey.length){
      this.setState(Object.assign(this.state, {input:true}));
    }
    const a = this.state.searchKey.split(' ');
    for(let i=0;i<a.length;i++){
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    let essay = a.join(' ');
    this.setState(Object.assign(this.state, {searchKey:essay}));
  }

  printText = () => {
    let x='';
    let ran = Math.floor(Math.random()*5)+5;
    for(let i=this.state.currentPosition; i<ran+this.state.currentPosition ;i++){
      x+=text[i];
    }
    this.setState(Object.assign(this.state, {currentPosition: this.state.currentPosition+ran}));
    this.setState(Object.assign(this.state, {word:this.state.word + x}));
  }

  render(){
      if(!(this.state.input)){
        return(
          <React.Fragment>
            <Search setInput={this.setInput} wikiSearch={this.wikiSearch}/>
          </React.Fragment>
        );
      }
      else{
        return(
        <React.Fragment>
          <Display searchKey={this.state.searchKey} data={this.state.word} printText={this.printText} />
        </React.Fragment>
        );
        
      }
  }
}

export default App;