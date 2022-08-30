import React from "react";


export default function Toggle(props) {
    function h() {

        var x = document.getElementsByClassName("custom")[0];

        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }


    return (
        <div className="square mt-3 ">
            <div className="head">
                <div className="flex  space-between">
                    <p className="p-3 pb-0">{props.text}</p>

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
                    </div>
                </div>
            </div>
        </div>)
}