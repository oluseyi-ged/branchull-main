import React from "react";
import face from "../img/icons/fbook.png"
import twit from "../img/icons/twitter.png"
import insta from "../img/icons/insta.png"
import logo from "../img/footer_logo.png"
import {Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">

      <div className="row desktop blue_bg footer">
        <div className="col-lg-4 col-sm-2">
          <img className="logo" src={logo} alt="a" />

        </div>

        <div className="col-lg-2 my-5 row1">
          <ul>
            <li>Product</li>
            <Link to="/about"><li>Link Shortener</li></Link>
            <Link to="/training"><li>QR Code</li></Link>
            <Link to="/recruitment"><li>Bio Link</li></Link>
            <Link to="/emailSignature"><li>Email signature</li></Link>
          </ul>
        </div>
        <div className="col-lg-2 my-5 row2">
          <ul>
            <li>Resources</li>
            <Link to="/blog"><li>API for Developers</li></Link>
            <Link to="/contact"><li>Affiliate Program</li></Link>
            <Link to="/policy"><li>Feedback</li></Link>
          </ul>
        </div>
        <div className="col-lg-2 my-5 row2">
          <ul>
            <li>About Us</li>
            <Link to="/blog"><li>Our Team</li></Link>
            <Link to="/contact"><li>About Company</li></Link>
            <Link to="/policy"><li>Contact us</li></Link>
          </ul>
        </div>
        <div className="col-lg-2 my-5 row2">
          <ul>
            <li>Community</li>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/contact"><li>Help Center</li></Link>
            <Link to="/policy"><li>Report</li></Link>
          </ul>
        </div>
        {/* <div className="contact col-lg-3 my-5 row3">
                    Follow Us
                    <div className="icons">

                        <a href="" className=""> <img src={insta} className="blue" /></Link>
                        <a href="" className><img src={face} className="blue" /></Link>
                        <a href="" className><img src={twit} className="blue" /></Link>

                    </div>
                </div> */}
        <div className="flex languages space-between">
          <div>
            <a>English</a>
            <a>Deutsch</a>
            <a>Francais</a>
            <a>Espanol</a>
            <a>Portugues</a>
          </div>
          <div className="icons">
            <a href="" className><img src={face} className="blue" /></a>
            <a href="" className><img src={twit} className="blue" /></a>
            <a href="" className=""><img src={insta} className="blue" /></a>
          </div>
        </div>


        <hr className="white" />
        <div className="flex languages space-between">
          <div>
            <a>Terms and Conditions</a>
            <a>Privacy Policy</a>
          </div>

          <div className="white">
            (C) Copyright 2022 Braanchull. All Rights Reserved
          </div>
        </div>

      </div>



      {/* <div className="mobile rel">
        <div className="">
          <img className="logo" src={logo} alt="a" />
          <h5 className="Address">Address: 675 Alpha Drive, Ste E, Highland Heights,  OH 44143
            <br /> Phone: (216) 966 1022
            <br /> email:info@3dma.com <br />
            Fax: (216) 966 1023
          </h5>
        </div>
        <div className="flex">
          <div className="me-5">
            <ul>
              <li>as</li>
              <Link to="/about"><li>About</li></Link>
              <Link to="/training"><li>Training</li></Link>
              <Link to="/consult"><li>Consulting &amp; Advisory</li></Link>
              <Link to="/recruitment"><li>Recruitment</li></Link>
              <Link to="/outsourcing"><li>Outsourcing</li></Link>
            </ul>
          </div>
          <div className="">
            <ul className="my-3 support">
              <li>Support</li>
              <Link to="/blog"><li>IT Blog</li></Link>
              <Link to="/contact"><li>Contact Us</li></Link>
              <Link to="/policy"><li>Privacy Policy</li></Link>
              Follow Us
              <div className="icons">
                
                <div><a href="" className><img src={face} className="blue" /></Link></div>
                <div><a href="" className><img src={twit} className="blue" /></Link></div>
                <div><a href="" className=""> <img src={insta} className="blue" /></Link></div>
                <div><a href="" ><img src={tube} className="youtube" /></Link></div>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <p className="my-3">Copyright (C)
            3DMA. All rights reserved
          </p>
        </div>
      </div> */}

    </footer>

  )
}

export default Footer;