import React from "react"
import "./navbar.css"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function NavBar() {
    return (
        <navbar>
        <div class = "barStyle">
            <h1 id = "navBarHeader">Where do you want to go?</h1>
            <div id = "navBarText">
                <h2><Link activeClass = "active" to = "content1" spy = {true} smooth = {true} offset = {0} duration = {500}>My YouTube Channel</Link></h2>
            </div>
            <div id = "navBarText">
                <h2><Link activeClass = "active" to = "content1" spy = {true} smooth = {true} offset = {0} duration = {500}>My Courses</Link></h2>
            </div>
            <div id = "navBarText">
                <h2><Link activeClass = "active" to = "content1" spy = {true} smooth = {true} offset = {0} duration = {500}>My Projects</Link></h2>
            </div>
            <div id = "navBarText">
                <h2><Link activeClass = "active" to = "content1" spy = {true} smooth = {true} offset = {0} duration = {500}>Extras</Link></h2>
            </div>
        </div>
        </navbar>
    )
}

export default NavBar
