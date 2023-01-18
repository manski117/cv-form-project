import React, { useContext } from "react";
import { FormContext } from "../App";


function EduForm() {
    const {formData, setFormData} = React.useContext(FormContext);
    
    // const [formData, setFormData] = React.useState(
    //     {
    //         school: '',
    //         degree: '',
    //         startDate: '',
    //         gradDate: '',
    //     }
    // )

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
        </div>
        
    )
}

export default EduForm;