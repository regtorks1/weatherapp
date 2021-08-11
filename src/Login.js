import React from 'react';
import './Login.css';
import {useState} from 'react';
import { Link} from "react-router-dom";
import { reduxForm, Field} from 'redux-form';


 
 

let Login = (props) => { 
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

   Login = reduxForm({
     form: 'login'
   })(Login) 
 
  

  const handleSubmit = event => {
       event.preventDefault()
  }


  return(
    <div>
      <div className = 'login_container'>
    <form className = 'form_Name' onSubmit = {(e) => handleSubmit(e)}>
    <h1 className = 'login_heading'>LOGIN HERE</h1>
      {/* <input required type = "name" placeholder = 'Name' value ={name} onChange ={(event) => {
      setName(event.target.value)}} /> */}
      <input required type = 'email' placeholder = 'Email' value ={email} onChange= {(event) => {
        setEmail(event.target.value)}} />
      <input required type = 'password' placeholder = 'Password' value ={password} 
      onChange = {(event) => {setPassword(event.target.value)}} />
       <Link to = '/main'><button type = 'submit' className ="login_btn">LOGIN</button></Link> 
      <p>Forgot Password? Please reset <Link to = '/forgot-password'>here</Link>
        </p>
  
    </form>
   
     </div>
    </div>
  )
}

export default Login;
