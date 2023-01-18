import React from "react"
import BioForm from "./BioForm";

function Form() {
    return (
       <div className="main-form-container">
        <form action="" className="main-form">
            <section className="form-section">
                <BioForm />
            </section>
            <section className="form-section">Form component will go here</section>
            <section className="form-section">Form component will go here</section>
        </form>
       </div>
    )
}

export default Form;