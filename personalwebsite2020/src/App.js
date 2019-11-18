import React from 'react';

// Images
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
      <Picture src={profile} height="100px" radius="25%" text="" shadowOffsetX="5px" shadowOffsetY="10px" shadowColor="blue"/>
      <Picture src={burjkhalifa2} width="100px"/>
      <Picture src={kendo} height="1000px" width="1000px"/>

    </div>
  );
}

export default App;
