import React from "react";

function Review(props) {
    return (
        <div className="box center card">
            <div>
                <img src={props.img} className="icon" width="60%" />
                {/* star is here */}
            </div>
            <p className='feature'>{props.words}</p>
        </div>
    )
}

export default Review