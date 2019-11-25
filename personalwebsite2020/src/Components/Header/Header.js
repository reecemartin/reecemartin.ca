// Dependencies
import React from "react";
import "./Header.css";
import Picture from "../Picture/Picture.js";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

// Resources
import profile from "../../Images/Profile.jpg";

function Header() {
  return (
    <div>
      {/* Photo */}
      <Picture
        src={profile}
        maxRelativeWidth="20%"
        radius="50%"
        headroom="20px"
      />
      {/*Title*/}
      <header>
        <h1 style={{ fontFamily: "Roboto, sans-serif" }}>Reece Martin</h1>
        <h3 style={{ fontFamily: "Roboto, sans-serif" }}>
          Software Developer | Transit - Infrastructure Youtuber | Proud
          Torontonian
        </h3>
      </header>
      {/* Links */}
      <ButtonGroup
        size="large"
        aria-label="small outlined button group"
        style={{ paddingBottom: "20px" }}
      >
        <Button color={"primary"}>GitHub</Button>
        <Button color={"secondary"}>Resume</Button>
        <Button color="primary">LinkedIn</Button>
        <Button color="secondary">YouTube</Button>
        <Button color="primary">Support Me on Ko-Fi</Button>
      </ButtonGroup>
      <h3 style={{ fontFamily: "Roboto, sans-serif" }}>
        Welcome to my life. . .
      </h3>
    </div>
  );
}

export default Header;
