import React from "react"
import "./navbar.css"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function NavBar() {
    return (
        <navbar>
        <div class = "barStyle">
            <h1 id = "navBarHeader">Where do you want to go?</h1>
            <div id = "navBarTextFirst">
                <h2><Link activeClass = "active" to = "content1" spy = {true} smooth = {true} offset = {70} duration = {500}>My YouTube Channel</Link></h2>
            </div>
            <div id = "navBarText">
                <h2><Link activeClass = "active" to = "content2" spy = {true} smooth = {true} offset = {0} duration = {1000}>My Courses</Link></h2>
            </div>
            <div id = "navBarText">
                <h2><Link activeClass = "active" to = "content3" spy = {true} smooth = {true} offset = {0} duration = {500}>My Projects</Link></h2>
            </div>
            <div id = "navBarText">
                <h2><Link activeClass = "active" to = "footer1" spy = {true} smooth = {true} offset = {0} duration = {1500}>Links</Link></h2>
            </div>
        </div>
        </navbar>
    )
}

export default NavBar
