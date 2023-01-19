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
            <label htmlFor="degree">Highest Degree Earned 
                <input 
                    id="degree" 
                    name="degree" 
                    type="text" 
                    className="form-input"
                    maxLength={20} 
                    placeholder="Degree Earned"
                    onChange={handleChange}
                    value={formData.degree}
                     />
            </label>
            <br />
            <label htmlFor="school">School 
                <input 
                    id="school" 
                    name="school" 
                    type="text" 
                    className="form-input"
                    maxLength={30} 
                    placeholder="Name of Academic Institution or University"
                    onChange={handleChange}
                    value={formData.school}
                     />
            </label>
            <br />
            <label htmlFor="major">Major 
                <input 
                    id="major" 
                    name="major" 
                    type="text" 
                    className="form-input major-input invalid" 
                    placeholder="Major"
                    maxLength={20}
                    onChange={handleChange}
                    value={formData.major}
                     />
                <p className={formData.majorValid ? "form-feedback major-feedback hidden" : "form-feedback major-feedback visible"}>This field cannot be blank</p>
            </label>
            <br />
            <label htmlFor="startDate">Start Date 
                <input 
                    id="startDate" 
                    name="startDate" 
                    type="text" 
                    className="form-input"
                    maxLength={12} 
                    placeholder="Year Started"
                    onChange={handleChange}
                    value={formData.startDate}
                     />
            </label>
            <br />
            <label htmlFor="gradDate">Graduation Date 
                <input 
                    id="gradDate" 
                    name="gradDate" 
                    type="text" 
                    className="form-input"
                    maxLength={12} 
                    placeholder="Year of Graduation"
                    onChange={handleChange}
                    value={formData.gradDate}
                     />
            </label>
        </div>
        
    )
}

export default EduForm;