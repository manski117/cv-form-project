import React from "react"
import BioForm from "./BioForm";
import EduForm from "./EduForm";
import ProfessionalForm from "./ProfessionalForm";

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
            <section className="form-section">
                <ProfessionalForm />
            </section>
        </form>
       </div>
    )
}

export default Form;