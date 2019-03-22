import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter , Route, Switch } from "react-router-dom";

import Home from './component/Home';
import HhCard from './component/HhCard';
import Footer from './component/Footer';
import LogIn from './component/LogIn'

class App extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
        <Home/>
        <br/>
        <HhCard/>
        <br/>
        <Footer/>
        <LogIn/>
        </header>
      </div>
      
    );
  }
}

export default App;
