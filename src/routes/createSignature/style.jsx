import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function Style() {
    function h() {
        var x = document.getElementsByClassName("custom")[0];

        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        }
 
        
    
    return (
        <main>
            <h3>Colors, Font and Avatars </h3>
            <div className="square add_padding mt-4">
                <div className="flex space-evenly">
                    <div>
                        <h4>Link color</h4>
                        <input type="text" placeholder="#0000" className="grey_border" />



                    </div>
                    <div>
                        <h4>Font style</h4>
                        {/* dropdown */}
                        <div className="dropdown">
                            <button className="btn dropdown-toggle grey_border" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Poppins
                            </button>

                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4>Font size</h4>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle grey_border" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Medium
                            </button>

                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Small</a></li>
                                <li><a className="dropdown-item" href="#">Large</a></li>
                                <li><a className="dropdown-item" href="#">Medium</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="square mt-3 ">
                <div className="head">
                    <div className="flex  space-between">
                        <p className="p-3 pb-0">Add avater</p>

                        <label class="switch my-auto">
                            <input type="checkbox" onClick={h} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <hr className="w-100 m-0 no-padding" />
                    <div className="p-3 custom">
                        <div className="col-lg-3 square boxy avater">
                        </div>
                        <div className="text"></div>
                        <div className="mt-4">
                        <Link to="/create/addOns">   <button className="btn btn-primary">Next</button></Link>
                        </div></div>
                </div>
            </div>
        </main>
    )
}