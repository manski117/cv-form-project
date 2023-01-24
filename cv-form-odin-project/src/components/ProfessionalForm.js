import React, { useContext } from "react";
import { FormContext } from "../App";


function ProfessionalForm() {
    const {formData, setFormData} = React.useContext(FormContext);
    

    function handleChange (event){
        //get the event object from the element and destructure it
        const {name, value, id} = event.target;

        let jobNew = {...formData[id]};
        jobNew[name] = value;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [`${id}`] : jobNew
            }

        });
        //test line
        console.log(id, name, value);

    }


    return (
        <div className="form-section-wrapper work-section">
            <h3>Work History</h3>
            <div className="job1-inputs">
                <h4>Position 1*</h4>
                <p className={formData.job1Valid ? "form-feedback hidden" : "form-feedback visible"}>You must provide all details for at least one job.</p>
                <br />
                <label htmlFor="companyName">Company Name
                    <input
                        id="job1"
                        name="companyName"
                        type="text"
                        info="job1"
                        className="form-input"
                        maxLength={20}
                        placeholder="Company or Organization"
                        onChange={handleChange}
                        value={formData.job1.companyName}
                         />
                </label>
                <br />
                <label htmlFor="position">Position
                    <input
                        id="job1"
                        name="position"
                        type="text"
                        job="job1"
                        className="form-input"
                        maxLength={20}
                        placeholder="Job Title"
                        onChange={handleChange}
                        value={formData.job1.position}
                         />
                </label>
                <br />
                <label htmlFor="tasks">Job Tasks
                    <textarea
                        id="job1"
                        name="tasks"
                        type="textarea"
                        className="form-input"
                        maxLength={200}
                        placeholder="Description of job duties"
                        onChange={handleChange}
                        value={formData.job1.tasks}
                         />
                </label>
                <br />
                <label htmlFor="jobStartDate">Start Date
                    <input
                        id="job1"
                        name="jobStartDate"
                        type="text"
                        className="form-input"
                        maxLength={12}
                        placeholder="Start Date"
                        onChange={handleChange}
                        value={formData.job1.jobStartDate}
                         />
                </label>
                <br />
                <label htmlFor="jobEndDate">End Date
                    <input
                        id="job1"
                        name="jobEndDate"
                        type="text"
                        className="form-input"
                        maxLength={12}
                        placeholder="End Date or Present"
                        onChange={handleChange}
                        value={formData.job1.jobEndDate}
                         />
                </label>
                <br />
            </div>
            <div className="job2-inputs">
                <h3>Position 2</h3>
                <br />
                <label htmlFor="companyName">Company Name
                    <input
                        id="job2"
                        name="companyName"
                        type="text"
                        className="form-input"
                        maxLength={20}
                        placeholder="Company or Organization"
                        onChange={handleChange}
                        value={formData.job2.companyName}
                         />
                </label>
                <br />
                <label htmlFor="position">Position
                    <input
                        id="job2"
                        name="position"
                        type="text"
                        className="form-input"
                        maxLength={20}
                        placeholder="Job Title"
                        onChange={handleChange}
                        value={formData.job2.position}
                         />
                </label>
                <br />
                <label htmlFor="tasks">Job Tasks
                    <textarea
                        id="job2"
                        name="tasks"
                        type="textarea"
                        job="job1"
                        className="form-input"
                        maxLength={200}
                        placeholder="Description of job duties"
                        onChange={handleChange}
                        value={formData.job2.tasks}
                         />
                </label>
                <br />
                <label htmlFor="jobStartDate">Start Date
                    <input
                        id="job2"
                        name="jobStartDate"
                        type="text"
                        className="form-input"
                        maxLength={12}
                        placeholder="Start Date"
                        onChange={handleChange}
                        value={formData.job2.jobStartDate}
                         />
                </label>
                <br />
                <label htmlFor="jobEndDate">End Date
                    <input
                        id="job2"
                        name="jobEndDate"
                        type="text"
                        className="form-input"
                        maxLength={12}
                        placeholder="End Date or Present"
                        onChange={handleChange}
                        value={formData.job2.jobEndDate}
                         />
                </label>
                <br />
            </div>
            <div className="job2-inputs">
                <h3>Position 3</h3>
                <br />
                <label htmlFor="companyName">Company Name
                    <input
                        id="job3"
                        name="companyName"
                        type="text"
                        className="form-input"
                        maxLength={20}
                        placeholder="Company or Organization"
                        onChange={handleChange}
                        value={formData.job3.companyName}
                         />
                </label>
                <br />
                <label htmlFor="position">Position
                    <input
                        id="job3"
                        name="position"
                        type="text"
                        className="form-input"
                        maxLength={20}
                        placeholder="Job Title"
                        onChange={handleChange}
                        value={formData.job3.position}
                         />
                </label>
                <br />
                <label htmlFor="tasks">Job Tasks
                    <textarea
                        id="job3"
                        name="tasks"
                        type="textarea"
                        job="job1"
                        className="form-input"
                        maxLength={200}
                        placeholder="Description of job duties"
                        onChange={handleChange}
                        value={formData.job3.tasks}
                         />
                </label>
                <br />
                <label htmlFor="jobStartDate">Start Date
                    <input
                        id="job3"
                        name="jobStartDate"
                        type="text"
                        className="form-input"
                        maxLength={12}
                        placeholder="Start Date"
                        onChange={handleChange}
                        value={formData.job3.jobStartDate}
                         />
                </label>
                <br />
                <label htmlFor="jobEndDate">End Date
                    <input
                        id="job3"
                        name="jobEndDate"
                        type="text"
                        className="form-input"
                        maxLength={12}
                        placeholder="End Date or Present"
                        onChange={handleChange}
                        value={formData.job3.jobEndDate}
                         />
                </label>
                <br />
            </div>
            <p className="fine-print">* indicates a reqired field</p>
            
        </div>
        
    )
}

export default ProfessionalForm;