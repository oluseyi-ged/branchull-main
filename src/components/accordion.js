import React from "react";

function Accordion(props) {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id={props.h2ID}>
                <button class="accordion-button collapsed white" type="button" 
                data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="true" 
                aria-controls={props.controls}>
                    {props.question}
                </button>
            </h2>

            
            <div id={props.controls} class="accordion-collapse collapse" 
            aria-labelledby={props.h2ID} data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    {props.answer}
                </div>
            </div>
        </div>
    )

}

export default Accordion;