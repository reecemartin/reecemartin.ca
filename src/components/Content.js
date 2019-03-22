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

                <h1 id = "contentText"> My YouTube is an important project that I have been</h1>
                <h1 id = "contentText">working on as of late. I create videos about</h1>
                <h1 id = "contentText">transportation and transit. </h1>

                <br></br>

                <h1 id = "contentText"> I currently have over 650 subscribers, and over 220,000 views.</h1>

                <br></br>

                <div class = "content">

                <h1 id = "contentTextIndent">This is me visiting every </h1>
                <h1 id = "contentTextIndent">Toronto Subway Station</h1>

                </div>

                <div id = "videoDiv">
                    <iframe width="560" height="315" align="center" src="https://www.youtube.com/embed/LFdjZF-E-lU" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                </div>

                <br></br>

                <div class = "content">

                <h1 id = "contentTextIndent">and every Montreal Metro Station.</h1>

                </div>

                <div id = "videoDiv">
                    <iframe width="560" height="315" align="center" src="https://www.youtube.com/embed/u-Or_vNc2Z4" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                </div>
            </div>

            </Element>
            <Element name = "content2">
                <div class = "content">
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h1 id = "contentText"> I've done over 25 courses at the</h1>
                <h1 id = "contentText">University of Toronto, more specifically:</h1>

                <p>
                    <h2 id = "contentTextIndent">
                        First Year
                    </h2>
                </p>

                <dl id = "list">
                        <dt><strong>MAT 135</strong></dt>
                        <dd>Calculus 1A</dd>

                        <dt><strong>MAT 136</strong></dt>
                        <dd>Calculus 1B</dd>

                        <dt><strong>PMU 199</strong></dt>
                        <dd>Statistics for Life</dd>

                        <dt><strong>PSY 100</strong></dt>
                        <dd>Introduction to Psychology</dd>

                        <dt><strong>GGR 112</strong></dt>
                        <dd>Geographies of Globalization and Inequality</dd>

                        <dt><strong>GGR 124</strong></dt>
                        <dd>Geographies of Urbanization and Contemporary Cities</dd>

                        <dt><strong>CSC 108</strong></dt>
                        <dd>Introduction to Computer Programming</dd>

                        <dt><strong>CSC 148</strong></dt>
                        <dd>Introduction to Computer Science</dd>

                        <dt><strong>CSC 165</strong></dt>
                        <dd>Mathematical Expression and Reasoning for Computer Science</dd>
                </dl>

                <p>
                    <h2 id = "contentTextIndent">
                        Second Year
                    </h2>
                </p>

                <dl id = "list">
                    <dt><strong>MAT 223</strong></dt>
                    <dd>Linear Algebra 1</dd>

                    <dt><strong>MAT 235</strong></dt>
                    <dd>Calculus 2</dd>

                    <dt><strong>STA 247</strong></dt>
                    <dd>Applications of Probability for Computer Scientists</dd>

                    <dt><strong>CSC 207</strong></dt>
                    <dd>Software Design</dd>

                    <dt><strong>CSC 236</strong></dt>
                    <dd>Introduction to the Theory of Computation</dd>

                    <dt><strong>CSC 263</strong></dt>
                    <dd>Data Structures and Analysis</dd>

                    <dt><strong>CSC 209</strong></dt>
                    <dd>Software Tools and Systems Programming</dd>

                    <dt><strong>CSC 258</strong></dt>
                    <dd>Computer Organization</dd>
                </dl>

                <p>
                    <h2 id = "contentTextIndent">
                        Third Year
                    </h2>
                </p>

                <dl id = "list">
                    <dt><strong>HPS 250</strong></dt>
                    <dd>Introduction to the Philosophy of Science</dd>

                    <dt><strong>CSC 301</strong></dt>
                    <dd>Introduction to Software Engineering</dd>

                    <dt><strong>CSC 300</strong></dt>
                    <dd>Computers and Society</dd>

                    <dt><strong>CSC 343</strong></dt>
                    <dd>Introduction to Databases</dd>

                    <dt><strong>CSC 369</strong></dt>
                    <dd>Operating Systems</dd>

                    <dt><strong>CSC 373</strong></dt>
                    <dd>Algorithm Design and Analysis</dd>

                    <dt><strong>CSC 309</strong></dt>
                    <dd>Programming on the Web</dd>

                    <dt><strong>CSC 318</strong></dt>
                    <dd>The Design of Interactive Computational Media</dd>

                    <dt><strong>CSC 324</strong></dt>
                    <dd>Principles of Programming Languages</dd>

                    <dt><strong>CSC 384</strong></dt>
                    <dd>Introduction to Artificial Intelligence</dd>
                </dl>

                </div>
            </Element>
            <Element name = "content3">
                <div class = "content">

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h1 id = "contentText"> While I have built a plethora of projects</h1>
                <h1 id = "contentText"> in everything from Java to C to AngularJS,</h1>
                <h1 id = "contentText"> some that I am especially proud of are:</h1>

                <br></br>
                <br></br>

                <h1 id = "contentTextIndent"> Photomanager: A tool to manage all</h1>
                <h1 id = "contentTextIndent"> of your photos.</h1>

                 <img id = "imageOnWhite" border="5" src="https://github.com/reecemartin/photomanager/blob/master/screenshots/Screen%20Shot%202018-05-13%20at%203.42.53%20PM.png?raw=true" alt="Oops"></img>

                 <br></br>
                 <br></br>

                 <h1 id = "contentTextIndent"> BinaryNeuralNet: Binary pattern learning</h1>
                 <h1 id = "contentTextIndent"> from the ground up.</h1>

                  <img id = "imageOnWhite" border="5" src="https://raw.githubusercontent.com/reecemartin/binaryneuralnet/master/BinaryNeuralNet.png" alt="Oops"></img>

                </div>
            </Element>
        </div>
    )
}

export default Content
