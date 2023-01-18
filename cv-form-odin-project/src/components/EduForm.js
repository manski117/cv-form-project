import React, { useContext } from "react";
import { FormContext } from "../App";


function EduForm() {
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
            <label htmlFor="school">Name of University 
                <input 
                    id="school" 
                    name="school" 
                    type="text" 
                    className="form-input" 
                    placeholder="University"
                    onChange={handleChange}
                    value={formData.school}
                     />
            </label>
            <br />
            <label htmlFor="degree">Name of University 
                <input 
                    id="degree" 
                    name="degree" 
                    type="text" 
                    className="form-input" 
                    placeholder="Degree Earned"
                    onChange={handleChange}
                    value={formData.degree}
                     />
            </label>
            <br />
            <label htmlFor="startDate">Date Started 
                <input 
                    id="startDate" 
                    name="startDate" 
                    type="text" 
                    className="form-input" 
                    placeholder="Year Started"
                    onChange={handleChange}
                    value={formData.startDate}
                     />
            </label>
            <br />
            <label htmlFor="gradDate">Date Started 
                <input 
                    id="gradDate" 
                    name="gradDate" 
                    type="text" 
                    className="form-input" 
                    placeholder="Year of Graduation"
                    onChange={handleChange}
                    value={formData.gradDate}
                     />
            </label>
        </div>
        
    )
}

export default EduForm;