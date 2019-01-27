import React from "react"
import "./footer.css"

function Footer() {
    return (
        <footer>
            <div class = "bottomFooter">
                <h1 id = "footerHeader">Links</h1>
                <div id = "footerText">
                    <h2><a id = "linkStyle" href="https://github.com/reecemartin">GitHub</a></h2>
                </div>
                <div id = "footerText">
                    <h2><a id = "linkStyle" href="https://www.linkedin.com/in/reece-martin-a4287b90/">LinkedIn</a></h2>
                </div>
                <div id = "footerText">
                    <h2><a id = "linkStyle" href="https://www.youtube.com/channel/UCf4iKXL_SJQ5d0qsKkboRRQ">YouTube</a></h2>
                </div>
                <div id = "footerText">
                    <h2><a id = "linkStyle" href="https://drive.google.com/file/d/10lCZehJY_o696bJJH0_1h7ddVMI7fI7c/view?usp=sharing">Resume</a></h2>
                </div>
                <div id = "footerText">
                    <h2><a id = "linkStyle" href="https://reecemartin.github.io/">Legacy Site</a></h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer
