import React from "react";
import { FormContext } from "../App";

function Resume() {
    const {formData, setFormData} = React.useContext(FormContext);

    return (
       <div className="resume-container">
        <h1 className="resume-name">{formData.firstName} {formData.lastName}</h1>
        <div className="contact-info-flexbox">
            <p>{formData.phone}</p>
            <p>{formData.email}</p>
        </div>
        <div className="education-flexbox">
            <div className="section-title">
                <h3 className="section-title">Education</h3>
            </div>
            <div className="school-flexbox section-flexbox">
                <div className="school-details">
                    <p className="company-name-text">{formData.school}</p>
                    <p>{formData.degree}</p>
                    <p>{formData.major}</p>
                </div>
                <div className="school-dates">
                    <p>{formData.startDate} - {formData.gradDate}</p>
                </div>
            </div>
        </div>
        <div className="work-flexbox">
            <div className="section-title">
                <h3 className="section-title">Work History</h3>
            </div>
            <div className="job1-flexbox section-flexbox">
                <div className="job1-details">
                    <p className="company-name-text">{formData.job1.companyName}</p>
                    <p className="position-text">{formData.job1.position}</p>
                    <p>{formData.job1.tasks}</p>
                </div>
                <div className="job1-dates">
                <p>{formData.job1.jobStartDate} thru {formData.job1.jobEndDate}</p>
                </div>
            </div>

            <div className="job2-flexbox section-flexbox">
                <div className="job2-details">
                    <p className="company-name-text">{formData.job2.companyName}</p>
                    <p className="position-text">{formData.job2.position}</p>
                    <p>{formData.job2.tasks}</p>
                </div>
                <div className="job1-dates">
                <p>{formData.job2.jobStartDate} thru {formData.job2.jobEndDate}</p>
                </div>
            </div>

            <div className="job3-flexbox section-flexbox">
                <div className="job3-details">
                    <p className="company-name-text">{formData.job3.companyName}</p>
                    <p className="position-text">{formData.job3.position}</p>
                    <p>{formData.job3.tasks}</p>
                </div>
                <div className="job1-dates">
                <p>{formData.job3.jobStartDate} thru {formData.job3.jobEndDate}</p>
                </div>
            </div>
        </div>
        
       </div>
    )
}

export default Resume;


// <h1>Resume Component</h1>
        // <h3>the info from App.js should appear below</h3>
        
        
        
        
        
//         <h3>below are data from nested obj</h3>
//         <p>{formData.job1.companyName}</p>
//         <p>{formData.job1.position}</p>
//         <p>{formData.job1.tasks}</p>
//         <p>{formData.job1.jobStartDate} thru {formData.job1.jobEndDate}</p>
//         <h3>below are data from jobs 2 and 3</h3>
//         <p>{formData.job2.companyName}</p>
//         <p>{formData.job2.position}</p>
//         <p>{formData.job2.tasks}</p>
//         <p>{formData.job2.jobStartDate} thru {formData.job2.jobEndDate}</p>
//         <p>{formData.job3.companyName}</p>
//         <p>{formData.job3.position}</p>
//         <p>{formData.job3.tasks}</p>
//         <p>{formData.job3.jobStartDate} thru {formData.job3.jobEndDate}</p>