// Dependencies
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Picture from "./Components/Picture/Picture.js";
import Footer from "./Components/Footer/Footer.js";

// Resources
import burjkhalifa2 from "./Images/BurjKhalifa_2.jpeg";
import kendo from "./Images/Kendo.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Picture src={burjkhalifa2} width="100px" />
      <Picture src={kendo} width="1000px" />
      <Footer />
    </div>
  );
}

export default App;
