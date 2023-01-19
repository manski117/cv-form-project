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

  // function invalidateField(string){
  //   //takes the name of the key as a string
  //   let key = `${string}Valid`;
  //   let value = false;
  //   let formCopy = {...formData};
  //   formCopy[key] = value;
  //   setFormData(formCopy);
    
  // }

  // function validateField(string){
  //   //takes the name of the key as a string
  //   let key = `${string}Valid`;
  //   let value = true;
  //   let formCopy = {...formData};
  //   formCopy[key] = value;
  //   setFormData(formCopy);
    
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
