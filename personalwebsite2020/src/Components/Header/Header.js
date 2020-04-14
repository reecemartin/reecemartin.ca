// Dependencies
import React from "react";
import "./Header.css";
import Picture from "../Picture/Picture.js";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

// Mobile Device Detection Dependency
import { isMobile } from "react-device-detect";

// Resources
import profile from "../../Images/Profile.jpg";

function Header() {
  // Display the pretty version whether Desktop or Mobile
  return isMobile ? (
    <div>
      {/* Photo */}
      <Picture
        src={profile}
        maxRelativeWidth="20%"
        radius="50%"
        headroom="20px"
      />
      {/*Title*/}
      {/*OMGOMG Combine these, otherwise you will be pulling your hair out*/}
      <header>
        <h1 style={{ fontFamily: "Roboto, sans-serif" }}>Reece Martin</h1>
        <h3 style={{ fontFamily: "Roboto, sans-serif" }}>
          Software Developer | Proud Torontonian | YouTube Creator | NUMTOT
        </h3>
        <h3>
          To get in touch, {""}
          <a href="mailto:capt.rm.fae@gmail.com">Email Me Here</a>
        </h3>
      </header>
      {/* Links */}
      <ButtonGroup
        size="large"
        aria-label="small outlined button group"
        style={{ paddingBottom: "20px" }}
      >
        <Button color="primary" href="https://github.com/reecemartin">
          GitHub
        </Button>
        <Button
          color="secondary"
          href="https://docs.google.com/document/d/1m-nb5H31J2ku1d-8enio0CV2sTMDGvS8jmQkK-Ic0P8/edit"
        >
          Resume
        </Button>
        <Button
          color="primary"
          href="https://www.linkedin.com/in/reece-martin-a4287b90/"
        >
          LinkedIn
        </Button>
      </ButtonGroup>
      <ButtonGroup
        size="large"
        aria-label="small outlined button group"
        style={{ paddingBottom: "20px" }}
      >
        <Button
          color="secondary"
          href="https://www.youtube.com/channel/UCf4iKXL_SJQ5d0qsKkboRRQ"
        >
          YouTube
        </Button>
        <Button color="primary" href="https://ko-fi.com/rmtransit">
          Support Me on Ko-Fi
        </Button>
      </ButtonGroup>
      <h3 style={{ fontFamily: "Roboto, sans-serif", maxWidth: "50%" }}>
        Hi, my name's Reece. I grew up in Vancouver, British Columbia. Since I was young I've had a love for machines and technology and their influence on our world. I now live in Toronto, Ontario attending the University of Toronto for my Honours B.Sc in Computer Science. I have many passions including software development, technology, videomaking, engineering, public transport and travel and I try to summarize many of them on this site. Thanks for visiting!
      </h3>
    </div>
  ) : (
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
            Software Developer | Proud Torontonian | YouTube Creator | NUMTOT
        </h3>
          <h3>
            To get in touch, {""}
            <a href="mailto:capt.rm.fae@gmail.com">Email Me Here</a>
          </h3>
        </header>
        {/* Links */}
        <ButtonGroup
          size="large"
          aria-label="small outlined button group"
          style={{ paddingBottom: "20px" }}
        >
          <Button color="primary" href="https://github.com/reecemartin">
            GitHub
        </Button>
          <Button
            color="secondary"
            href="https://docs.google.com/document/d/1m-nb5H31J2ku1d-8enio0CV2sTMDGvS8jmQkK-Ic0P8/edit"
          >
            Resume
        </Button>
          <Button
            color="primary"
            href="https://www.linkedin.com/in/reece-martin-a4287b90/"
          >
            LinkedIn
        </Button>
          <Button
            color="secondary"
            href="https://www.youtube.com/channel/UCf4iKXL_SJQ5d0qsKkboRRQ"
          >
            YouTube
        </Button>
          <Button color="primary" href="https://ko-fi.com/rmtransit">
            Support Me on Ko-Fi
        </Button>
        </ButtonGroup>
        <h3 style={{ fontFamily: "Roboto, sans-serif", maxWidth: "50%" }}>
          Hi, my name's Reece. I grew up in Vancouver, British Columbia. Since I was young I've had a love for machines and technology and their influence on our world. I now live in Toronto, Ontario attending the University of Toronto for my Honours B.Sc in Computer Science. I have many passions including software development, technology, videomaking, engineering, public transport and travel and I try to summarize many of them on this site. Thanks for visiting!
      </h3>
      </div>
    );
}

export default Header;
