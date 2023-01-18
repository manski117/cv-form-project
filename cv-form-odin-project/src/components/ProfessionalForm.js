import React, { useContext } from "react";
import { FormContext } from "../App";


function ProfessionalForm() {
    const {formData, setFormData} = React.useContext(FormContext);
    

    function handleChange (event){
        //get the event object from the element and destructure it
        const {name, value} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }

        });
        //test line
        console.log(formData);

        
    }


    return (
        <div className="form-section-wrapper bio-section">
            <label htmlFor="companyName">Company Name 
                <input 
                    id="companyName" 
                    name="companyName" 
                    type="text" 
                    className="form-input" 
                    placeholder="Company or Organization"
                    onChange={handleChange}
                    value={formData.companyName}
                     />
            </label>
            <br />
            <label htmlFor="position">Position 
                <input 
                    id="position" 
                    name="position" 
                    type="text" 
                    className="form-input" 
                    placeholder="Job Title"
                    onChange={handleChange}
                    value={formData.position}
                     />
            </label>
            <br />
            <label htmlFor="tasks">Job Tasks 
                <textarea 
                    id="tasks" 
                    name="tasks" 
                    type="textarea" 
                    className="form-input" 
                    placeholder="Description of job duties"
                    onChange={handleChange}
                    value={formData.tasks}
                     />
            </label>
            <br />
            <label htmlFor="jobStartDate">Start Date 
                <input 
                    id="jobStartDate" 
                    name="jobStartDate" 
                    type="text" 
                    className="form-input" 
                    placeholder="Start Date"
                    onChange={handleChange}
                    value={formData.jobStartDate}
                     />
            </label>
            <br />
            <label htmlFor="jobEndDate">End Date 
                <input 
                    id="jobEndDate" 
                    name="jobEndDate" 
                    type="text" 
                    className="form-input" 
                    placeholder="End Date or Present"
                    onChange={handleChange}
                    value={formData.jobEndDate}
                     />
            </label>
            <br />
            
        </div>
        
    )
}

export default ProfessionalForm;