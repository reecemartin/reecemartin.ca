// Dependencies
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Picture from "./Components/Picture/Picture.js";
import Footer from "./Components/Footer/Footer.js";
import Card from "./Components/Card/Card.js";

// Resources
import burjkhalifa2 from "./Images/BurjKhalifa_2.jpeg";
import kendo from "./Images/Kendo.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Picture src={burjkhalifa2} maxRelativeWidth="30%" />
      <Card title="Travel : Dubai" body="This picture was taken on my trip to Dubai in the United Arab Emirates. The building pictured is the 828m Burj Khalifa, the worlds tallest building as of 2019." maxRelativeWidth="60%"/>
      <Picture src={kendo} width="1000px" />
      <Footer />
    </div>
  );
}

export default App;
