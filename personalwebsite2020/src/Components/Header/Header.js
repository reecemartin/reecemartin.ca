// Dependencies
import React from "react";
import "./Header.css";
import Picture from "../Picture/Picture.js";

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
        <h1>Reece Martin</h1>
        <h3>
          Software Developer | Transit - Infrastructure Youtuber | Proud
          Torontonian
        </h3>
      </header>
      {/* Links */}
    </div>
  );
}

export default Header;
