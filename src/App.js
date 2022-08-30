import React from "react";
import logo1 from "./img/logo.png"
// import Footer from "./components/Footer";
import logo from "./img/logo.svg"
import "./App.css";
import { Link } from "react-router-dom";
import SignatureFooter from "./components/SignatureFooter";

function App() {
  return (
    <div className="App">
      <nav className="flex space-between">
        <div className="my-auto ">
          <img src={logo1}/>
        </div>
        <div className="flex">
          <p className="my-auto me-2">Log in</p>
          <button className="btn btn-primary">Get started</button>
        </div>
      </nav>

      <div className="center">
        <img src={logo} className="animated bounceInLeft"/>
        <p className="my-5">Easy Access to the Best Products to make your life easier</p>
       <div className="flex space-evenly product">
       <Link to="/linkShortner"> <p>Link Shortener</p></Link>
        <p>Bio-Link</p>
        <p>Qr-Code</p>
        <p>E-Invite</p>
        <Link to="create"><p>Email signature</p></Link>
        </div>
        <Link to="/linkShortner"><button className="btn btn-primary mb-5">Get Started</button></Link>
      </div>

      <SignatureFooter/>
    </div>
    
  )
}

export default App;