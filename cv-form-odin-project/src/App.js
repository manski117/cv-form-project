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

  ////////////experimental state/////////////
  const [formData, setFormData] = React.useState({
    school: '',
    degree: '',
    startDate: '',
    gradDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    position: '',
    tasks: '',
    jobStartDate: '',
    jobEndDate: ''
  });
  



  //////////good functions////////////////////
  function togglePage(){
    setOnFormPage(!onFormPage);
    console.log(formData);
  }
  /////////experimental functions/////////////

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
