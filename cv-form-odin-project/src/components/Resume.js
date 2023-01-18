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
        <h3>below are data from nested obj</h3>
        <p>{formData.job1.companyName}</p>
        <p>{formData.job1.position}</p>
        <p>{formData.job1.tasks}</p>
        <p>{formData.job1.jobStartDate} thru {formData.job1.jobEndDate}</p>
        <h3>below are data from jobs 2 and 3</h3>
        <p>{formData.job2.companyName}</p>
        <p>{formData.job2.position}</p>
        <p>{formData.job2.tasks}</p>
        <p>{formData.job2.jobStartDate} thru {formData.job2.jobEndDate}</p>
        <p>{formData.job3.companyName}</p>
        <p>{formData.job3.position}</p>
        <p>{formData.job3.tasks}</p>
        <p>{formData.job3.jobStartDate} thru {formData.job3.jobEndDate}</p>
       </div>
    )
}

export default Resume;