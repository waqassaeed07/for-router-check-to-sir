import React, { Component } from 'react';

import './App.css';
import {BrowserRouter,Router,Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import Welcome from "./component/welcome"
import Leftside from './component/leftside';

class App extends Component {
  render() {
    return (
      
      
      <BrowserRouter>
      
      <div className="App">
      <Leftside />
      
       
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
