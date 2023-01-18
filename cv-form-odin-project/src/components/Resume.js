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
        <p>{formData.firstName} {formData.lastName}</p>
        <p>{formData.phone}</p>
        <p>{formData.email}</p>
        <p>{formData.companyName}</p>
        <p>{formData.position}</p>
        <p>{formData.tasks}</p>
        <p>{formData.jobStartDate} thru {formData.jobEndDate}</p>
       </div>
    )
}

export default Resume;