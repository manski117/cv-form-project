import React from "react"
import BioForm from "./BioForm";
import EduForm from "./EduForm";

function Form() {
    return (
       <div className="main-form-container">
        <form action="" className="main-form">
            <section className="form-section">
                <BioForm />
            </section>
            <section className="form-section">
                <EduForm />
            </section>
            <section className="form-section">Form component will go here</section>
        </form>
       </div>
    )
}

export default Form;