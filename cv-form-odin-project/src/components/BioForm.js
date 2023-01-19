import React from "react";
import { FormContext } from "../App";


function BioForm() {
    const {formData, setFormData} = React.useContext(FormContext);
    
    // const [formData, setFormData] = React.useState(
    //     {
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         phone: '',
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
            <label htmlFor="firstName">First Name 
                <input 
                    id="firstName" 
                    name="firstName" 
                    type="text" 
                    className={formData.firstNameValid ? "form-input valid" : "form-input invalid"}
                    maxLength={20}  
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.firstName} />
                <p className={formData.firstNameValid ? "form-feedback hidden" : "form-feedback visible"}>This field cannot be blank.</p>
            </label>
            <br />
            <label htmlFor="lastName">Last Name 
                <input 
                    id="lastName" 
                    name="lastName" 
                    type="text" 
                    className={formData.lastNameValid ? "form-input valid" : "form-input invalid"}
                    maxLength={25}  
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.lastName} />
                <p className={formData.lastNameValid ? "form-feedback hidden" : "form-feedback visible"}>This field cannot be blank.</p>
                                
                    
            </label>
            <br />
            <label htmlFor="email">Email 
                <input 
                    id="email" 
                    name="email" 
                    type="text" 
                    className="form-input"
                    maxLength={40}  
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={formData.email} />
            </label>
            <br />
            <label htmlFor="phone">Phone Number 
                <input 
                    id="phone" 
                    name="phone" 
                    type="text" 
                    className="form-input"
                    maxLength={16}  
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={formData.phone} />
            </label>
            <br />
        </div>
    )
}

export default BioForm;


