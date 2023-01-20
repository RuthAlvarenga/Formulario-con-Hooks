import React,{useState} from 'react'
import './App.css';
import UserForm from './user/UserForm';
import DataUser from './user/DataUser';

const App = () => {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: ''
  }
  const [state, setState] = useState(initialValues);

  return (
    <div className="App">
        <UserForm inputs={state} setInputs={setState}/>
  
        <DataUser data={state}/>
    </div>
  );
}

export default App;
