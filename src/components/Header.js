import React from "react"
import "./header.css"

function Header() {
    return (
        <header>
            <div class = "topHeader">
                <div id = "headerImageContainer">
                    <img src = {require("../images/profileImage.jpg")} id =
                    "headerImage"></img>
                </div>
                <div id = "headerText">
                    <h1> I'm Reece Martin, a Developer and</h1>
                    <h1> a Computer Science Specialist at</h1>
                    <h1> the University of Toronto.</h1>
                </div>
            </div>
        </header>
    )
}

export default Header
