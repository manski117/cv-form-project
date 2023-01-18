import React from "react";
import { FormContext } from "../App";

function Resume() {
    const {formData, setFormData} = React.useContext(FormContext);

    return (
       <div className="resume-container">
        <h1>Resume Component</h1>
        <h3>the info from App.js should appear below</h3>
        <p>{formData.school}</p>
        <p>{formData.degree}</p>
       </div>
    )
}

export default Resume;