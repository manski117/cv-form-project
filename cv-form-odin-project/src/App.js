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

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        {currentPage}
        
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
