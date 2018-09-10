import React, { Component } from 'react';
import CoachBaySearch from './CoachBaySearch.js'; 
import Information from './Information.js'; 

// import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.info = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coach Bay</h1>
        </header>

        <CoachBaySearch updateInfo={this.updateInfo.bind(this)} />
        <Information ref={this.info}/>         
      </div>
    );
  }
  
  updateInfo(busStop){
    this.info.current.updateInfo(busStop)
  }
}

export default App;
