import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateCurrentUser } from "firebase/auth";
import './App.css';
import app from './firebase.init';

import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
const auth=getAuth(app);


function App() {
  
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [validated, setValidated] = useState(false);
  const handleEmailControl=even=>{
    setEmail(even.target.value)
  }

  const handlePasswordControl=even=>{
    setPassword(even.target.value)
  }
  const handleSubmit=even=>{  const form = even.currentTarget;
    if (form.checkValidity() === false) {
      even.preventDefault();
      even.stopPropagation();
      return;
    }
    if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      even.preventDefault();
      setError('Minimum use one special character.')
      return;
    }
    setValidated(true);
    setError('');

    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      setEmail('');
      setPassword('');
      sendEmailVarification();
    })
    .catch(error=>{
      console.log(error);
      setError(error.message);
    })

    even.preventDefault();
  }
 const sendEmailVarification=()=>{
  sendEmailVerification(auth.currentUser)
  .then(()=>{
    console.log('email verification send ');
  })
 }


  return (
    <div className="App">
      <div className="registation w-50 mx-auto">
        <h2 className="text-primary">Register </h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleEmailControl} type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>  <Form.Control.Feedback type="invalid">
              Please choose a valid Email.
            </Form.Control.Feedback>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePasswordControl} type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Control.Feedback type="invalid">
              Please choose a valid password.
            </Form.Control.Feedback>
            <p className="text-danger">{error}</p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
      
    </div>
  );
}

export default App;
