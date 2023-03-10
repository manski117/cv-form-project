import React, { useContext } from "react";
import { FormContext } from "../App";


function EduForm() {
    const {formData, setFormData} = React.useContext(FormContext);
    let majorValid = true;
    

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
            <h3>Education</h3>
            <label htmlFor="degree">Highest Degree Earned* 
                <input 
                    id="degree" 
                    name="degree" 
                    type="text" 
                    className={formData.degreeValid ? "form-input valid" : "form-input invalid"}
                    maxLength={20} 
                    placeholder="Degree Earned"
                    onChange={handleChange}
                    value={formData.degree}
                     />
                <p className={formData.degreeValid ? "form-feedback major-feedback hidden" : "form-feedback visible"}>This field cannot be blank</p>
            </label>
            <br />
            <label htmlFor="school">School* 
                <input 
                    id="school" 
                    name="school" 
                    type="text" 
                    className={formData.schoolValid ? "form-input valid" : "form-input invalid"}
                    maxLength={30} 
                    placeholder="Name of Academic Institution or University"
                    onChange={handleChange}
                    value={formData.school}
                     />
                <p className={formData.schoolValid ? "form-feedback major-feedback hidden" : "form-feedback visible"}>This field cannot be blank</p>
            </label>
            <br />
            <label htmlFor="major">Major 
                <input 
                    id="major" 
                    name="major" 
                    type="text" 
                    className={formData.majorValid ? "form-input valid" : "form-input invalid"}
                    placeholder="Major"
                    maxLength={20}
                    onChange={handleChange}
                    value={formData.major}
                     />
                <p className={formData.majorValid ? "form-feedback major-feedback hidden" : "form-feedback major-feedback visible"}>This field cannot be blank</p>
            </label>
            <br />
            <label htmlFor="startDate">Year Started* 
                <input 
                    id="startDate" 
                    name="startDate" 
                    type="text" 
                    className={formData.startDateValid ? "form-input valid" : "form-input invalid"}
                    maxLength={12} 
                    placeholder="Year Started"
                    onChange={handleChange}
                    value={formData.startDate}
                     />
                <p className={formData.startDateValid ? "form-feedback major-feedback hidden" : "form-feedback major-feedback visible"}>Please only provide a year</p>
            
            </label>
            <br />
            <label htmlFor="gradDate">Graduation Date* 
                <input 
                    id="gradDate" 
                    name="gradDate" 
                    type="text" 
                    className={formData.gradDateValid ? "form-input valid" : "form-input invalid"}
                    maxLength={12} 
                    placeholder="Year of Graduation"
                    onChange={handleChange}
                    value={formData.gradDate}
                    />
                <p className={formData.gradDateValid ? "form-feedback major-feedback hidden" : "form-feedback major-feedback visible"}>This field cannot be blank. If not finished, provide the expected year of graduation.</p>
            
            </label>
            <p className="fine-print">* indicates a reqired field</p>
        </div>
        
    )
}

export default EduForm;