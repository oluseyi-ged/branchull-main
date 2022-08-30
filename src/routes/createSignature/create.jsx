import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/nav";
import SignatureNav from "../../components/Signature_nav";
import SignatureFooter from "../../components/SignatureFooter";
import { Outlet } from "react-router-dom";




function Create() {
    
    return (
        <div className="Create">
            <SignatureNav />
            <section>
                <div className="row">
                <div className="col-lg-7">
                    <Outlet/>
                    </div>
                    <div className="col-lg-5 ms-auto">
                        <div className="square mt-5">
                            <div className="head">
                                    <p className="p-3 pb-0">Preview</p>
                                    <hr className="w-100 no-padding"/>
                                <div className="p-3">
                                <div className="col-lg-3 square boxy avater">
                                </div>
                                <div className="text"></div>
                                <div className="text-end">
                                <button className="btn btn-primary br_50">save signature</button>
                            </div></div>
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
            </section>
          <SignatureFooter/>  
        </div>
        
    )
}

export default Create;