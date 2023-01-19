import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Resume from './components/Resume';
import React from 'react';

//creates a context obj to allow us to provide ctx
const FormContext = React.createContext(null);

function App() {
  /////////////good state/////////////////
  //control which page is rendered to main
  const [onFormPage, setOnFormPage] = React.useState(true);

  //conditionally render what content renders based on page selection
  const currentPage = onFormPage ? <Form /> : <Resume />

  
  const [formData, setFormData] = React.useState({
    school: '',
    degree: '',
    major:'',
    startDate: '',
    gradDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    job1: {
      companyName: '',
      position: '',
      tasks: '',
      jobStartDate: '',
      jobEndDate: ''
    },
    job2: {
      companyName: '',
      position: '',
      tasks: '',
      jobStartDate: '',
      jobEndDate: ''
    },
    job3: {
      companyName: '',
      position: '',
      tasks: '',
      jobStartDate: '',
      jobEndDate: ''
    },
    schoolValid: true,
    degreeValid: true,
    majorValid: true,
    startDateValid: true,
    gradDateValid: true,
    firstNameValid: true,
    lastNameValid: true,
    emailValid: true,
    phoneValid: true,
    job1Valid: true

  });
  ////////////experimental state/////////////
  



  //////////good functions////////////////////
  // function togglePage(){
  //   setOnFormPage(!onFormPage);
  //   console.log(formData);
  // }
  /////////experimental functions/////////////
  function formIsValid(formData){
    console.log(formData.lastName, formData.firstName, formData.job1.companyName);
    return true;
  }

  function togglePage(){
    if (formIsValid(formData)){
      setOnFormPage(!onFormPage);
      console.log(onFormPage);
    } else{
      alert('Form contains missing fields');
    }

    
  }


  return (
    <div className="app-container">
      <Header 
        selected={onFormPage}
        handleClick={togglePage}/>
      
        <FormContext.Provider value={{formData, setFormData}}>
          <div className="main-content">
            {currentPage}
          
          </div>
        </FormContext.Provider>
      

      <Footer />
      
    </div>
  );
}

export  {App, FormContext};
