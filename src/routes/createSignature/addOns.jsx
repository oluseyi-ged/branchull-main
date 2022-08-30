import React from "react";
import Toggle from "../../components/toggle";
import { Link } from "react-router-dom"

export default function AddOn(){
    return(
        <main>
        <section>
            <Toggle 
            text="Add banner"

            />
             <Toggle 
            text="Add Green Message"/>
             <Toggle 
            text="Add CTA"/>
             <Toggle 
            text="Add Text"/>
             <Toggle 
            text="Add Disclaimer"/>
            <Link to="/create/layout"> <button className="btn btn-primary mt-4">Finish</button></Link>
</section>
        </main>
    )
}