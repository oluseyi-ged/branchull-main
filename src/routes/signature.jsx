import React from "react";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import laptop from "../img/signature/laptop.png"
import bg from "../img/background2.png"
import brand1 from "../img/brands/analytics.png"
import brand2 from "../img/brands/guardian.png"
import brand3 from "../img/brands/standard.png"
import brand4 from "../img/brands/insider.png"
import placeholder from "../img/placeholder.png"
import { Link } from "react-router-dom";







function Signature() {
    return (
        <div className="signature">
            <Nav />
            <div className='container-fluid  no-padding'>

                <div className='row blue_bg tool '>
                    <div className='col-lg-6 my-auto'>
                        <h1 className="white">Get closer to your
                            brand with Braanch
                        </h1>
                        <p className="white">A custom short link personalization tool that enables  <br />you to target,engage and drive more customers</p>
                        <button className='btn btn-success br_50'>Create signature</button>
                    </div>
                    <div className='col-lg-6'>
                        <img src={laptop} width="100%" />
                    </div>
                </div>


                <section>
                    <div className="">
                        <div className="center mb-5">
                            <h2 className="blue my-3">How it works?</h2>
                            <p>Discover how to use our Email Signature Generator </p></div>
                        <div className="row list">
                           
                                <div className="col-lg-4">
                                    <h4>Select a Signature Template Design</h4>
                                    <p>Choose between the different templates or create a custom design of your choice</p>
                                </div>
                                <div className="col-lg-4">
                                    <h4>Enter Your Signature Details</h4>
                                    <p>Fill in the information that will appear on the signature, such as: name, email address, phone number, job title, company, website, address etc.</p>
                                </div>
                                <div className="col-lg-4">
                                    <h4>Add your Social Media Links</h4>
                                    <p>Add links to your Facebook, Twitter, LinkedIn and Instagram pages.</p>
                                </div>
                                <div className="col-lg-4">
                                    <h4>Personalize your Signature</h4>
                                    <p>Choose a theme color, text color, social icons color and font</p>
                                </div>
                                <div className="col-lg-4">
                                    <h4>Upload custom images</h4>
                                    <p>Add your headshot and select the shape (cropped to square or circle). Also, add your company logo.
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <h4>Create a custom CTA</h4>
                                    <p>Create a customized call-to-action button for your email signature. Personalize the button with a different color.</p>
                                </div>
                            </div>
                        </div>
                
                </section>
                <div className="relative  no-padding cta">
                    <img src={bg} width="100%" />
                    <div className="absolute centered space w-60">
                        <h3 className='white fw-600'>Create an Email  Signature Now</h3>
                        <p className='white'>Fill in the information that will appear on the signature, such as: name, email address, phone number, job title, company, website, address.</p>
                        <Link to="/linkShortner"> <button className='btn btn-success'>Create Now</button></Link>
                    </div>
                </div>

                <section>
                    <h3 className='white fw-600'>Create an Email  Signature Now</h3>
                    <h3 className="center">Trusted By many Companies</h3>
                    <div className="flex space-between">
                        <img src={brand1} />
                        <img src={brand2} />
                        <img src={brand3} />
                        <img src={brand4} />
                    </div>
                </section>

                <section>
                    <div className="flex">
                        <div>
                            <img src={placeholder} />
                        </div>
                        <div className="my-auto tool">
                            <h4>The email signature is a significant element of your business image. That's why it must reflect your personal brand and align with your company's brand voice. Trying to create a sign-off on your own takes much time that could be spent on more important tasks.
                                <br /><br />
                                Braanchull is an online email signature generator that helps create professional and branded email signatures for Gmail, Outlook, Apple Mail, Thunderbird, and Office 365 clients. No technical background is needed.</h4>
                            <Link to="/create">
                                <button className="btn btn-primary br_50">Create Signature </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-rev">
                        <div>
                            <img src={placeholder} />
                        </div>
                        <div className="my-auto tool">
                            <h3>Create Email Signatures From any device</h3>
                            <h4>Generate email signatures by using any internet-connected device, no matter whether it is a smartphone or tablet. Being mobile-optimized, MySignature saves time while allowing to create multiple email signatures even on the go.</h4>
                            <Link to="/create"> <button className="btn btn-success br_50">Create Signature </button></Link>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <img src={placeholder} />
                        </div>
                        <div className="my-auto tool">
                            <h3>Easily customize your Email Signature</h3>
                            <h4>Enable your clients to reach you out through other communication channels such as a website or social networks. Promote your personal brand and services more effectively by adding clickable email banners, links to landing pages, and interactive CTA buttons.</h4>
                            <Link to="/create">  <button className="btn btn-primary br_50">Create Signature </button></Link>
                        </div>
                    </div>
                </section>

                <section id="advice">
                    <h3 className="center">Do you want to build your Brand Online?</h3>
                    <div className="mx-auto w-60">

                        <p>Use an online signature generator and spend the spare time running your business and creating valuable connections.</p>
                        <p><span className="blue">Braanchull </span>is the right solution for small businesses, entrepreneurs, and customer-facing professionals that need:</p>
                        <div className="">
                            <ul className="gradient p-0">
                                <li>HTML email signature that is flawless and mobile adaptable</li>
                                <li>Email signature templates are custom made with a brand voice in mind</li>
                                <li>Online editor with outstanding customer support</li>
                                <li>Need more info? <span className="blue">Contact us</span></li>
                            </ul>
                        </div>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Signature;