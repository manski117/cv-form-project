import React from "react"

function BioForm() {
    const [formData, setFormData] = React.useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }
    )

    function handleChange (event){
        //get the event object from the element and destructure it
        const {name, value} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }

        });
        console.log(formData);

        
    }


    return (
        <div className="form-section-wrapper bio-section">
            <label htmlFor="firstName">First Name 
                <input 
                    id="firstName" 
                    name="firstName" 
                    type="text" 
                    className="form-input" 
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.firstName} />
            </label>
        </div>
    )
}

export default BioForm;