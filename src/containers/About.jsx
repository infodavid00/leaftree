// import React from "react"
import Nav from "../component/Nav.jsx"
import Src from "../assets/WidescreenAU.mp4"
import "../App.css"

export default function About() {
  return (
    <>
      <Nav />
      <div id="HomescreeVideoContainer">
        <video id="HomescreenVideo" autoPlay muted loop>
            <source src={Src} type="video/mp4" />
        </video>
      </div>
    </>
  )
}
