import React, { Component } from 'react';
import Search from './Search';
import Display from './Display';
import puppeteer from 'puppeteer';

class App extends Component{
  constructor(){
    super();
    this.state = {
      searchKey: ''
    }
  }

  setInput = (event) => {
    this.setState({searchKey:event.target.value});
  }

  wikiSearch = (event) =>{
    const data = async function searchWikipedia(searchQuery) {
        const endpoint = `https://en.wikipedia.org/wiki/${searchQuery}`;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(endpoint);

        const [el] = await page.$x('//*[@id="mw-content-text"]/div[1]/p[2]');
        const txt = el.getProperty('textContent');
        const rawTxt = await txt.jsonValue();
        console.log({rawTxt})
      }
    const p = data(this.state.searchKey);
  }

  render(){
    return(
      <React.Fragment>
        <h1>Essay-Typer</h1>
        <Search setInput={this.setInput} wikiSearch={this.wikiSearch}/>
        <Display />
      </React.Fragment>
    );
  }
}

export default App;