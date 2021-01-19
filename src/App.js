import React, { Component } from 'react';
import Search from './Search';
import Display from './Display';

let text='';

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
    fetch('http://localhost:3000', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ searchKey: this.state.searchKey})})
      .then(response => response.json())
      .then(response => {text = response})
      .then((response) => {
        if(this.state.searchKey.length){
          this.setState(Object.assign(this.state, {input:true}));
        };
      })
      .catch(err => console.log)
  }

  printText = () => {
    let x='';
    let ran = Math.floor(Math.random()*5)+5;
    if(text === ''){
      alert("enter correct word");
      this.setState(Object.assign(this.state, {input:false}));
    }
    else{
      for(let i=this.state.currentPosition; i<ran+this.state.currentPosition ;i++){
        x+=text[i];
      }
      this.setState(Object.assign(this.state, {currentPosition: this.state.currentPosition+ran}));
      this.setState(Object.assign(this.state, {word: this.state.word + x}));
    }
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