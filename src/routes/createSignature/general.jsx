import React from "react";
import { Link } from "react-router-dom";

function General() {

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (

        <><h3>Input Your Signature Details</h3><form onSubmit={handleSubmit} className="createSignature">
            <input type="text" placeholder="First Name" /><br />
            <input type="text" placeholder="Last Name" /><br />
            <input type="text" placeholder="Phone " /><br />
            <input type="text" placeholder="Email " /><br />
            <input type="text" placeholder="Company Name" /><br />
            <input type="text" placeholder="Address" /><br />
            <input type="text" placeholder="Job Title" /><br />
            <input type="text" placeholder="Website" /><br />
            <Link to="/create/social"><button type="submit" className="btn btn-primary">Next</button></Link>

        </form></>

    )
}

export default General