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

  
  //this line will update when/if my obj changes
  React.useEffect(() => {
    console.log('new state just dropped:')
    console.log(formData);
  }, [formData]);

  function isValidEmail(str) {
    let regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    return regex.test(str);
  }

  function isValidPhone(str) {
    let regex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
    return regex.test(str);
  }

  function isValidYear(str) {
    let regex = /^[0-9]{4}$/;
    return regex.test(str);
  }

  
    
  // }
  function processValidation(validArr, invalidArr){
    let formCopy = {...formData};

    //valid loop
    for (let v = 0; v < validArr.length; v++){
        let string = validArr[v];
        let key = `${string}Valid`;
        let value = true; //valid array
        formCopy[key] = value;
        console.log('another valid guy set to true');
    }
    //invalid loop
    for (let i = 0; i < invalidArr.length; i++){
        let string = invalidArr[i];
        let key = `${string}Valid`;
        let value = false; //invalid array
        formCopy[key] = value;
        console.log('another invalid guy set to false');
        
    }
    
    console.log(formCopy);
    //call setFormData ONLY ONCE.
    setFormData(formCopy);

    
  }

  function formIsValid(formData){
    let validity = true;
    let vFields = [];
    let iFields = [];

    if(formData.firstName.length < 1){
      //if !valid, send it to invalid array
      console.log('your first name is too short');
      iFields.push('firstName');
      validity = false;
    } else{
      //if valid, send it to valid array
      vFields.push('firstName');
    }

    if(formData.lastName.length < 1){
      console.log('your last name is too short');
      iFields.push('lastName');
      validity = false;
    } else{
      vFields.push('lastName');
    }
    
    if(formData.email.length < 5 || !isValidEmail(formData.email) ){
      console.log('email is either too short or a bad format');
      iFields.push('email');
      validity = false;
    } else{
      vFields.push('email');
    }

    if(formData.phone.length < 5 || !isValidPhone(formData.phone) ){
      console.log('phone number is either too short or a bad format');
      iFields.push('phone');
      validity = false;
    } else{
      vFields.push('phone');
    }

    if(formData.degree.length < 1){
      console.log('degree too short');
      iFields.push('degree');
      validity = false;
    } else{
      vFields.push('degree');
    }

    if(formData.school.length < 1){
      console.log('school name is too short');
      iFields.push('school');
      validity = false;
    } else{
      vFields.push('school');
    }


    if(formData.startDate.length < 2 || !isValidYear(formData.startDate)){
      console.log('start Date name is too short or improper format');
      iFields.push('startDate');
      validity = false;
    } else{
      vFields.push('startDate');
    }

    if(formData.gradDate.length < 2 || !isValidYear(formData.gradDate)){
      console.log('gradDate name is too short or improper format');
      iFields.push('gradDate');
      validity = false;
    } else{
      vFields.push('gradDate');
    }

    if(formData.job1.companyName.length < 1 || formData.job1.position.length < 1 || formData.job1.tasks.length < 1 || formData.job1.jobStartDate.length < 1 || formData.job1.jobEndDate.length < 1){
      console.log('you had one job, and that was to tell me about one job');
      iFields.push('job1');
      validity = false;
    } else{
      vFields.push('job1');
    }


    processValidation(vFields, iFields);
    return validity;
  }

  function togglePage(){
    if (formIsValid(formData)){
      setOnFormPage(!onFormPage);
      console.log(onFormPage);
      
    } else{
      alert('Form contains missing fields');
      console.log(formData);
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
