// Dependencies
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Picture from "./Components/Picture/Picture.js";
import Footer from "./Components/Footer/Footer.js";
import Card from "./Components/Card/Card.js";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

// New function for importing all pictures into the images list as their filenames
function importAll(pictures) {
  let images = {};
  pictures.keys().map((item, index) => {
    images[item.replace("./", "")] = pictures(item);
  });
  return images;
}

const images = importAll(
  require.context("./Images", false, /\.(png|jpe?g|svg)$/)
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picturesActive: {
        growingUp: false,
        university: false,
        travel: false,
        technology: false,
        food: false,
        computers: false,
        transportation: false
      },
    };

    this.changeImageState = this.changeImageState.bind(this);
    this.hideAllImages = this.hideAllImages.bind(this);
  }

  changeImageState(imageName) {
    const prev = this.state.picturesActive[imageName];
    this.setState({ picturesActive: {...this.state.picturesActive, [imageName]: !prev } });
  }

  hideAllImages(e) {
    e.preventDefault();
    this.setState({
      picturesActive: {
        growingUp: false,
        university: false,
        travel: false,
        technology: false,
        food: false,
        computers: false,
        transportation: false
      },
    }, () => {
      console.log(this.state);
    });
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
          onClick={(e) => {
            e.preventDefault();
            this.changeImageState("growingUp");
          }}
        />
        {this.state.picturesActive["growingUp"] ? (
          <Picture
            src={[
              [images["Vancouver1.jpg"], "27%", ""],
              [images["Vancouver 2.jpg"], "30%", ""],
              [images["Vancouver3.jpg"], "30%", ""],
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
          onClick={(e) => {
            e.preventDefault();
            this.changeImageState("university");
          }}
        />
        {this.state.picturesActive["university"] ? (
          <Picture src={images["UofT.jpg"]} maxRelativeWidth="30%" />
        ) : (
          <></>
        )}{" "}
        {/* Tech Jobs*/}
        <Card
          title="Travel: Local"
          body="Toronto became my hub for travels throughout the Northeast. Along with my partner Ellen I visited a number of cities both for leisure and for hackathons."
          maxRelativeWidth="60%"
          onClick={(e) => {
            this.changeImageState("travel");
          }}
        />
        {this.state.picturesActive["travel"] ? (
          <Picture
            src={[
              [images["Waterloo.jpg"], "30%", "Waterloo, Ontario"],
              [images["NiagaraFalls.jpg"], "30%", "Niagara Falls, Ontario"],
              [
                images["Yale.jpg"],
                "30%",
                "Yale University - New Haven, Connecticut",
              ],
              [images["Montreal1.jpg"], "30%", ""],
              [images["Montreal2.jpg"], "30%", ""],
              [images["Montreal3.jpg"], "30%", "Montreal, Quebec"],
            ]}
          />
        ) : (
          <></>
        )}{" "}
        <Card
          title="Career Development: Technology"
          body="In first year of University I got to finally visit a mythical tech company office, which featured beanbags and all. After second second year I was able to land my first job working at a fintech startup out of Vancouver. Following my third year I got another job this time at a major bank which cemented my career direction in the fintech area."
          maxRelativeWidth="60%"
          onClick={(e) => {
            e.preventDefault();
            this.changeImageState("technology");
          }}
        />
        {this.state.picturesActive["technology"] ? (
          <Picture
            src={[
              [
                images["VisitingFirstTechCompany.jpg"],
                "30%",
                "Visiting my first Tech Company: Mozilla",
              ],
              [
                images["FirstTechJob.jpg"],
                "30%",
                "My first Tech Job: Grow Enterprise Fintech (now part of ATB)",
              ],
              [images["SecondTechJob.jpg"], "30%", "My second Tech Job: RBC"],
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
          onClick={(e) => {
            e.preventDefault();
            this.changeImageState("food");
          }}
        />
        {this.state.picturesActive["food"] ? (
          <Picture
            src={[
              [
                images["Food1.jpg"],
                "30%",
                "Eva's a fantastic Ice Cream Place on Bloor St. in Toronto that serves their Ice Cream in a Churro Cone",
              ],
              [
                images["Food2.jpg"],
                "30%",
                'This is a "Raindrop" Cake from Vancouver\'s Richmond Night Market ',
              ],
              [
                images["Food3.jpg"],
                "30%",
                "Fantastic Sushi from Saint Sushi in Montreal",
              ],
              [
                images["Food4.jpg"],
                "30%",
                "One of my favorite Korean BBQ places from near my house in Vancouver",
              ],
              [images["Food 5.jpg"], "30%", ""],
              [
                images["Food6.jpg"],
                "30%",
                "Pizza, one of my favorite foods . . ",
              ],
              [images["Food7.jpg"], "30%", "WVRST a Toronto Icon"],
              [
                images["Food8.jpg"],
                "30%",
                "The Special Tim Hortons at RBI (Tim Hortons parent company) Headquarters",
              ],
              [
                images["Food9.jpg"],
                "30%",
                "Bake Code, a very cool Coding Themed Asian Bakery with ChaTime",
              ],
            ]}
          />
        ) : (
          <></>
        )}{" "}
        {/* Hardware */}
        <Card
          title="Technology: Hardware"
          body="One of my greatest passions is Computer Hardware, I've spent lot's of time upgrading and building computers in recent years growing my knowledge of the machines that power the modern world."
          maxRelativeWidth="60%"
          onClick={(e) => {
            e.preventDefault();
            this.changeImageState("computers");
          }}
        />
        {this.state.picturesActive["computers"] ? (
          <Picture
            src={[
              [images["Computer1.jpg"], "30%", "Repairing my partners broken laptop."],
              [images["Computer2.jpg"], "30%", "Drying out a coworkers very wet Macbook Pro."],
              [images["Computer3.jpg"], "30%", "The first ever Intel PC I built for myself with an i9-9900k and 32 GB of ram!"],
              [images["Computer4.jpg"], "30%", "A closer look the the IHS on the processor and power control on my first Intel motherboard."],
              [images["Computer5.jpg"], "30%", "The first experience I had with full Dimm slots and 64 GB of memory."],
              [images["Computer6.jpg"], "30%", "My first personal rig I was actually properly proud of, however this system was short lived as I soon needed to move to Vancouver."],
            ]}
          />
        ) : (
          <></>
        )}{" "}
        {/* Mass Transportation */}
        <Card
          title="Urbanism: Mass Transportation"
          body="One of my greatest passions is mass transit, particularily rail. I've travelled to a number of countries and used their transit systems and it's given me a new appreciation for a number of cities I've visited."
          maxRelativeWidth="60%"
          onClick={(e) => {
            e.preventDefault();
            this.changeImageState("transportation");
          }}
        />
        {this.state.picturesActive["transportation"] ? (
          <Picture
            src={[
              [images["Train1.jpg"], "30%", ""],
              [images["Train2.jpg"], "30%", ""],
              [images["Train3.jpg"], "30%", ""],
              [images["Train5.jpg"], "30%", ""],
              [images["Train6.jpg"], "30%", ""],
              [images["Train7.jpg"], "30%", ""],
              [images["Train8.jpg"], "30%", ""],
            ]}
          />
        ) : (
          <></>
        )}{" "}
        <ButtonGroup
          size="large"
          aria-label="small outlined button group"
          style={{ paddingBottom: "20px" }}
        >
          <Button color="secondary" onClick={this.hideAllImages}>
            Close All
          </Button>
        </ButtonGroup>
        <Footer />
      </div>
    );
  }
}

export default App;
