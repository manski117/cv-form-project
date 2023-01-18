import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Resume from './components/Resume';
import React from 'react';


function App() {
  //control which page is rendered to main
  const [onFormPage, setOnFormPage] = React.useState(true);

  const currentPage = onFormPage ? <Form /> : <Resume />

  function togglePage(){
    setOnFormPage(!onFormPage);
  }

  return (
    <div className="app-container">
      <Header 
        selected={onFormPage}
        handleClick={togglePage}/>
      <div className="main-content">
        {currentPage}
        
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
