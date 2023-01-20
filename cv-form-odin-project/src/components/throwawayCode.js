//from grandchild component
import { ContextTest } from "../App";
const testC = React.useContext(ContextTest);

//from grandsire component
export const ContextTest = React.createContext();
const [testC, setTestC] = React.useState(true);
<ContextTest.Provider value={testC}>
</ContextTest.Provider>



let formData = {
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

  };

let val = ['firstName', 'lastName'];
let inval = ['email', 'job1'];
let invalidBois = ['major', 'school']
let empty = [];
let allBois= ['school', 'degree', 'major', 'startDate', 'gradDate', 'firstName', 'lastName', 'email', 'phone', 'job1']

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