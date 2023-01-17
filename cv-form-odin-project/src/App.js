import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Resume from './components/Resume';


function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Form />
        <Resume />
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
