import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js'
import Picture from './Components/Picture/Picture.js'

function App() {
  return (
    <div className="App">

      <Header/>
      <Picture src="https://www.amd.com/system/files/2019-07/238593-amd-ryzen-chip-full-standing-1260x709.jpg" height="100px"/>
      <Picture src="https://www.amd.com/system/files/2019-07/238593-amd-ryzen-chip-full-standing-1260x709.jpg" width="100px"/>
      <Picture src="https://www.amd.com/system/files/2019-07/238593-amd-ryzen-chip-full-standing-1260x709.jpg" height="100px" width="100px"/>

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
