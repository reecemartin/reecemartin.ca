import React from "react"
import "./content.css"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Content() {
    return (
        <div>
        <Element name = "content1">
            <div class = "content">

            <br></br>
            <br></br>
            <br></br>
            <br></br>

                <h1 id = "contentText"> My YouTube is an important project </h1>
                <h1 id = "contentText">that I have been working on as of late. </h1>
                <h1 id = "contentText"> I create videos about transportation and transit. </h1>
            </div>


            <div id = "videoDiv">
                <iframe width="560" height="315" align="center" src="https://www.youtube.com/embed/LFdjZF-E-lU" frameborder="0" allow="autoplay; encrypted-media"></iframe>
            </div>

            <br></br>

            <div id = "videoDiv">
                <iframe width="560" height="315" align="center" src="https://www.youtube.com/embed/u-Or_vNc2Z4" frameborder="0" allow="autoplay; encrypted-media"></iframe>
            </div>

            </Element>
        </div>
    )
}

export default Content
