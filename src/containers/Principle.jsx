import Nav from "../component/Nav.jsx"
import Src from "../assets/WidescreenOP.mp4"
import "../App.css"
import { useState } from "react";
import validator from "validator";

function Form() {
  const [isGoodToGo, setIsGoodToGo] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState('');
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    if (fullName && email && validator.isEmail(email) && referral) {
      setIsGoodToGo(true);
    } else {
      setIsGoodToGo(false);
    }
  }
  const Payload = {
    fullName,
    email,
    referral
  }
  const handleSubmit = () => {
    console.log(Payload)
  }
  return (
    <div id="form-container">
        <input type="text" className="form-input" placeholder="Enter your Full Name" value={fullName} onChange={(e) => handleInputChange(e, setFullName)} />
        <input type="email" className="form-input" placeholder="Enter your Email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
        <input type="text" className="form-input" placeholder="How did you hear about LeafTree?" value={referral} onChange={(e) => handleInputChange(e, setReferral)} />
        <button id="form-btn"
        style={{opacity: isGoodToGo ? 1 : 0.5}}
        onClick={() => handleSubmit()}
        disabled={!isGoodToGo}>Request Presentation</button>
        <button id="form-btn" 
        onClick={()=> window.location.href = "/principle"}
        style={{
           background: "#f9f9f9", border: "1px solid #ccc" , color: "black"
        }}>Go Back</button>
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
