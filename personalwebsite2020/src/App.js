// Dependencies
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Picture from "./Components/Picture/Picture.js";
import Footer from "./Components/Footer/Footer.js";
import Card from "./Components/Card/Card.js";

// Resources
import vancouver1 from "./Images/Vancouver1.jpg";
import vancouver2 from "./Images/Vancouver 2.jpg";
import vancouver3 from "./Images/Vancouver3.jpg";
import uoft1 from "./Images/UofT.jpg";
import travelsLocal1 from "./Images/Waterloo.jpg";

import burjkhalifa2 from "./Images/BurjKhalifa_2.jpeg";
import kendo from "./Images/Kendo.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Picture src={vancouver1} maxRelativeWidth="27%" />
      <Picture src={vancouver2} maxRelativeWidth="30%" />
      <Picture src={vancouver3} maxRelativeWidth="30%" />
      <Card
        title="Growing Up: Vancouver"
        body="I grew up and spent most of my time up until University in Vancouver, British Columbia. Vancouver remains one of my favorite cities in the world for it's beautiful landscapes, relaxed attitude and phenomenal planning."
        maxRelativeWidth="60%"
      />
      <Picture src={uoft1} maxRelativeWidth="30%" />
      <Card
        title="University: Toronto"
        body="In 2016 I moved to Toronto, Ontario to attend the University of Toronto studying Computer Science. Toronto is an incredible city to live in and Toronto has been a jumping off point for many of my interests in the past years."
        maxRelativeWidth="60%"
      />
    
      <Footer />
    </div>
  );
}

export default App;
