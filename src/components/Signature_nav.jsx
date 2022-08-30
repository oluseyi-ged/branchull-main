import React from "react";
import fbook from "../img/signature/fbook.png"
import twit from "../img/signature/twitter.png"
import logo from "../img/logo.png"
import { Link } from "react-router-dom";

function SignatureNav() {

    let activeStyle = {
        textDecoration: 'underline',
        color: '#918c8c',
        textDecorationColor: '#FF9800'
    };
    
    return (
        <div>
            <div className="flex space-between">
                <div>
                    <img src={logo} />
                </div>
                <div className="flex space_20 no-padding">
                    <h5 className="my-auto fw-600">share</h5>
                    <img src={fbook} />
                    <img src={twit} />
                </div>
            </div>

            <div className="blue_bg center">
                <ul className="flex signatureNav">
                    <Link to="general"><li>General</li></Link>
                    <Link to="social"><li>Social</li></Link>
                    <Link to="style"><li>Style</li></Link>
                    <Link to="addOns"><li>Add-Ons</li></Link>
                    <Link to="Layout"><li>Layout</li></Link>

                </ul>
            </div>
        </div>
    )
}


export default SignatureNav;