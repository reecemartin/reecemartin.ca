import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

function Page () {
    return (
        <div>
            <Header />
            <NavBar />
            <Content />
            <Footer />
        </div>
    )
}

export default Page
