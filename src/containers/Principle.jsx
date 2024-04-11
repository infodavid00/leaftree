import Nav from "../component/Nav.jsx"
import Src from "../assets/WidescreenOP.mp4"
import "../App.css"
import { useState } from "react";

function Form() {
  return (
    <div> 
       {/* <div id="nameEntry" style="display: none;">
          <input type="text" id="fullName" placeholder="Enter your Full Name" />
      </div>
      <div id="emailEntry" style="display: none;">
          <input type="text" id="email" placeholder="Enter your Email" />
      </div>
      <div id="infoEntry" style="display: none;">
          <input type="text" id="info" placeholder="How did you hear about LeafTree?" />
      </div> */}
    </div>
  )
}

export default function Principle() {
  const GetScreenWidth = window.innerWidth;
  const [onForm, setonForm] = useState(false)
  return (
    <>
      <Nav />
      {onForm ? <Form /> : 
       <>
       <div id="openBtnCont"  style={{
          bottom: GetScreenWidth >= 1260  && 
          GetScreenWidth <= 1487 === true ?
          "13%" : "8%"
        }}>
      <button id="openBtn" onClick={()=> setonForm(true)}>
        Request Form</button>
      </div>
      <div id="HomescreeVideoContainer">
        <video id="HomescreenVideo" autoPlay muted loop>
            <source src={Src} type="video/mp4" />
        </video>
      </div> 
      </>
    } 
    </>
  )
}


//             <!-- <div id="emailButton">
//     <button class="bg-green text-white px-4 py-2 rounded-xl" onclick="acceptEmail()">Request Presentation</button>
// </div> -->

