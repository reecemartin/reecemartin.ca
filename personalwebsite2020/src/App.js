// Dependencies
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Picture from "./Components/Picture/Picture.js";
import Footer from "./Components/Footer/Footer.js";
import Card from "./Components/Card/Card.js";

// Images

// Hometown
import vancouver1 from "./Images/Vancouver1.jpg";
import vancouver2 from "./Images/Vancouver 2.jpg";
import vancouver3 from "./Images/Vancouver3.jpg";
import uoft1 from "./Images/UofT.jpg";
import travelsLocal1 from "./Images/Waterloo.jpg";
import travelsLocal2 from "./Images/NiagaraFalls.jpg";
import travelsLocal3 from "./Images/Yale.jpg";
import travelsLocal4 from "./Images/Montreal1.jpg";
import travelsLocal5 from "./Images/Montreal2.jpg";
import travelsLocal6 from "./Images/Montreal3.jpg";
import tech1 from "./Images/VisitingFirstTechCompany.jpg";
import tech2 from "./Images/FirstTechJob.jpg";
import tech3 from "./Images/SecondTechJob.jpg";
import food1 from "./Images/Food1.jpg";
import food2 from "./Images/Food2.jpg";
import food3 from "./Images/Food3.jpg";
import food4 from "./Images/Food4.jpg";
import food5 from "./Images/Food 5.jpg";
import food6 from "./Images/Food6.jpg";
import food7 from "./Images/Food7.jpg";
import food8 from "./Images/Food8.jpg";
import food9 from "./Images/Food9.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picturesActive: false };
    this.flipImages = this.flipImages.bind(this)
  }

  flipImages(e) {
    e.preventDefault()
    console.log("event fired");
    this.setState({picturesActive: !this.state.picturesActive});
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* Growing Up */}
        <Card
          title="Growing Up: Vancouver"
          body="I grew up and spent most of my time up until University in Vancouver, British Columbia. Vancouver remains one of my favorite cities in the world for it's beautiful landscapes, relaxed attitude and phenomenal planning."
          maxRelativeWidth="60%"
          onClick={this.flipImages}
        />
        {this.state.picturesActive ? (
          <Picture
            src={[
              [vancouver1, "27%", ""],
              [vancouver2, "30%", ""],
              [vancouver3, "30%", ""]
            ]}
          />
        ) : (
          <></>
        )}{" "}
        {/* University */}
        <Card
          title="University: Toronto"
          body="In 2016 I moved to Toronto, Ontario to attend the University of Toronto studying Computer Science. Toronto is an incredible city to live in and Toronto has been a jumping off point for many of my interests in the past years."
          maxRelativeWidth="60%"
        />
        {this.state.picturesActive ? (
          <Picture src={uoft1} maxRelativeWidth="30%" />
        ) : (
          <></>
        )}{" "}
        {/* Tech Jobs*/}
        <Card
          title="Travel: Local"
          body="Toronto became my hub for travels throughout the Northeast. Along with my partner Ellen I visited a number of cities both for leisure and for hackathons."
          maxRelativeWidth="60%"
        />
        {this.state.picturesActive ? (
          <Picture
            src={[
              [travelsLocal1, "30%", "Waterloo, Ontario"],
              [travelsLocal2, "30%", "Niagara Falls, Ontario"],
              [
                travelsLocal3,
                "30%",
                "Yale University - New Haven, Connecticut"
              ],
              [travelsLocal4, "30%", ""],
              [travelsLocal5, "30%", ""],
              [travelsLocal6, "30%", "Montreal, Quebec"]
            ]}
          />
        ) : (
          <></>
        )}{" "}
        <Card
          title="Career Development: Technology"
          body="In first year of University I got to finally visit a mythical tech company office, which featured beanbags and all. After second second year I was able to land my first job working at a fintech startup out of Vancouver. Following my third year I got another job this time at a major bank which cemented my career direction in the fintech area."
          maxRelativeWidth="60%"
        />
        {this.state.picturesActive ? (
          <Picture
            src={[
              [tech1, "30%", "Visiting my first Tech Company: Mozilla"],
              [
                tech2,
                "30%",
                "My first Tech Job: Grow Enterprise Fintech (now part of ATB)"
              ],
              [tech3, "30%", "My second Tech Job: RBC"]
            ]}
          />
        ) : (
          <></>
        )}{" "}
        {/* Food */}
        <Card
          title="Food: A Journey"
          body="One thing that has been consistently great throughout the last several years of my life has been the incredible variety of food I have sampled!"
          maxRelativeWidth="60%"
        />
        {this.state.picturesActive ? (
          <Picture
            src={[
              [
                food1,
                "30%",
                "Eva's a fantastic Ice Cream Place on Bloor St. in Toronto that serves their Ice Cream in a Churro Cone"
              ],
              [
                food2,
                "30%",
                'This is a "Raindrop" Cake from Vancouver\'s Richmond Night Market '
              ],
              [food3, "30%", "Fantastic Sushi from Saint Sushi in Montreal"],
              [
                food4,
                "30%",
                "One of my favorite Korean BBQ places from near my house in Vancouver"
              ],
              [food5, "30%", ""],
              [food6, "30%", "Pizza, one of my favorite foods . . "],
              [food7, "30%", "WVRST a Toronto Icon"],
              [
                food8,
                "30%",
                "The Special Tim Hortons at RBI (Tim Hortons parent company) Headquarters"
              ],
              [
                food9,
                "30%",
                "Bake Code, a very cool Coding Themed Asian Bakery with ChaTime"
              ]
            ]}
          />
        ) : (
          <></>
        )}{" "}
        <Footer />
      </div>
    );
  }
}

export default App;
