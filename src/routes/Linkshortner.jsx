import Nav from '../components/nav';
import head from "../img/head_pic.svg"
import link from "../img/icons/blue_link.svg"
import clicks from "../img/icons/clicks.png"
import message from "../img/icons/message.png"
import bg from "../img/background.png"
import arrow from "../img/design/arrow.png"
import p_right from "../img/design/plant-right.png"
import p_left from "../img/design/plant-left.png"
import share from "../img/share_link.png"
import cross from "../img/cross_platform.png"
import Review from '../components/review';
import girl from "../img/icons/girl.png"
import woman from "../img/icons/woman.png"
import boy from "../img/icons/boy.png"
import Accordion from '../components/accordion';
import Footer from '../components/Footer';
import left from "../img/design/Group 12.svg"
import right from "../img/design/Group 13.svg"
import React from 'react';

function LinkShortner() {
  return (
    <div className="shortner">
      <Nav></Nav>
      <div className='container-fluid no-padding'>
        <section>

          <div className='row'>
            <div className='col-lg-6 my-4'>
              <h1><span className='blue'>Shorten</span> your Links the best<span className='blue'> way</span></h1>
              <p>A custom short link personalization tool that enables  <br />you to target,engage and drive more customers</p>
              <button className='btn btn-primary'>Get started for free</button>
            </div>
            <div className='col-lg-6'>
              <img src={head} width="100%" />
            </div>
          </div>

        </section>

        <section className='no-padding'>
          <div className='blue_bg center  '>
            <div className='tool cta'>
              <form action=''>
                <input type="text" className='input' placeholder='Paste a Link to Shorten' />
                <button className='btn btn-success'>Shorten</button></form>
                </div>
              <div class="dropdown">
                <a class="btn white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  more options
                </a>

                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>

              
           
          </div>
        </section>


        <section>
          <div className='w-50 pad relative'>
            <div className='center'>
              <h2 className='blue'>A Short link, Infinite Possibilities</h2>
              <p className='mx-auto'> Link shortening is a popular tool with spammers because it hides the true identity of the landing page URL. When a subscriber clicks on a shortened link, they are navigated to a fraudulent web page that may contain malware, or to a site used to steal information for identity theft.</p>
            </div>
            <img src={left} className="absolute leftArrow"/>
            <img src={right} className="absolute rightArrow"/>
            </div>
          <div className='flex domains'>
            <div className='box center'>

              <div>
                <img src={link} className="icon" />
              </div>
              <div>
                <h4 className="blue">Custom Domains</h4>
                <p className='feature'>Creating a new custom domain for each client by using your own domain or subdomain for shortening</p>
              </div>
            </div>


            <div className='box center'>
              <div>
                <img src={clicks} className="icon" />
              </div>
              <div>
                <h4 className="blue">Track Clicks</h4>
                <p className='feature'>Focus your clients efforts on the most promising campaigns by taking actions based on comprehensive statistics</p>
              </div>
            </div>

            <div className='box center'>
              <div>
                <img src={message} className="icon" />
              </div>
              <div>
                <h4 className="blue">Friendly Support</h4>
                <p className='feature'>Braanchull cares about you and your success in using short links,so you always get answers</p>
              </div>
            </div>
          </div>
        </section>



        <div className="relative move cta">
          <img src={bg} width="100%" />
          <div className="absolute centered space w-60">
            <h2 className='white big'>Create Personalized Shortlinks</h2>
            <p className='white fw-600'>and transfer links from one domain to another</p>
            <button className='btn btn-success'>Explore Pricing Plans</button>
          </div>
        </div>
        <section>

          <div className='relative '>
            <img src={arrow} className="absolute centered arrow" />
            <img src={p_right} className="absolute right" />
            <img src={p_left} className="absolute left" />


            <h2 className='center blue'>Benefits of Braanchull</h2>

            <div className='flex'>
              <div>
                <img src={share} /></div>
              <div className='my-auto tool'>
                <h3 className='blue fw-600'>Link Sharing</h3>
                <h4>Braanchull creates the avenue where one can share <span className="blue"> shortened links </span>from one person to another providing the right collection and attribution of the link.</h4>
              </div>
            </div>

            <div className='flex flex-rev'>
              <div>
                <img src={cross} /></div>
              <div className='my-auto tool'>
                <h3 className='blue fw-600'>Cross-Platform</h3>
                <h4>Braanchull is available for both Desktop and Mobile which gives you the multi-ability to be able to shorten your links on your laptops and mobile phones.  </h4>
              </div>
            </div>
          </div>
        </section>


        <div className='relative'>
          <img src={bg} width="100%" />
          <div className='absolute t-0'>
            <h2 className='center white'>What our customers are saying</h2>
            <div className='flex cent'>
              <Review
                img={girl}
                words="User Friendly and accesible .its the one stop shop for all link-associated things."
              />
              <Review
                img={woman}
                words="User Friendly and accesible .its the one stop shop for all link-associated things."
              />
              <Review
                img={boy}
                words="User Friendly and accesible .its the one stop shop for all link-associated things."
              />
            </div>
          </div>

        </div>

        <section>

          <div className='faq'>
            <h2 className='center blue'>FAQ<span className='green'>s</span></h2>
            <div class="accordion" id="accordionExample">
              <Accordion
                h2ID="headingOne"
                target="#collapseOne"
                controls="collapseOne"
                question="What is a Url Shortener?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
              />
              <Accordion
                h2ID="headingtwo"
                target="#collapseTwo"
                controls="collapseTwo"
                question="How do i apply password protection ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
              />
              <Accordion
                h2ID="headingthree"
                target="#collapseThree"
                controls="collapseThree"
                question="Can i forward my domain to another website?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
              />
              <Accordion
                h2ID="headingfour"
                target="#collapseFour"
                controls="collapseFour"
                question="How can i forward my domain to another website ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
              />
              <Accordion
                h2ID="headingfive"
                target="#collapseFive"
                controls="collapseFive"
                question="How to buy domain ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
              />
              <Accordion
                h2ID="headingsix"
                target="#collapseSix"
                controls="collapseSix"
                question="Benefits of Short Url ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
              />
              <Accordion
                h2ID="headingseven"
                target="#collapseSeven"
                controls="collapseSeven"
                question="Why choose Braanchull "
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
              />

            </div>
          </div>
          </section>
         
       <Footer/>
   
      </div>
    </div>

  );
}

export default LinkShortner;
