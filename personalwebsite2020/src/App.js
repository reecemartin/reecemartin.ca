import React from 'react';

// Images
import logo from './logo.svg';
import profile from './Images/Profile.jpg';
import burjkhalifa2 from './Images/BurjKhalifa_2.jpeg';
import kendo from './Images/Kendo.jpg';

import './App.css';
import Header from './Components/Header/Header.js'
import Picture from './Components/Picture/Picture.js'

function App() {
  return (
    <div className="App">

      <Header/>
      <Picture src={profile} height="100px" radius="border50" text=""/>
      <Picture src={burjkhalifa2} width="100px" radius="border25"/>
      <Picture src={kendo} height="1000px" width="1000px"/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
