import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

// const title = {
//     pageTitle: 'Forgot Password Screen'
// }



export const ForgotPassword = () => {
const [email, setEmail] = useState('');
const [newPassword, setNewPassword] = useState('');

const dispatch = useDispatch();

const handleSubmit = (e) => {

  e.preventDefault();

  dispatch(
     newPassword({
    email: email,
    password: newPassword,
    loggedIn: true
    })
);
  }

    return (
        <div>
            <div>
      <div className = 'login_container'>
    <form className = 'form_Name' onSubmit = {(e) => handleSubmit(e)}> 
    <h1 className = 'login_heading'>Reset Password</h1>
      <input required type = 'email' placeholder = 'Email' value = {email} onChange = {(e) => {setEmail(e.target.value)}}></input>
      <input required type = 'password' placeholder = 'New Password' value = {newPassword} onchange = {(e) => {setNewPassword(e.target.value)}}></input>
      <Link to = '/main'><button className ="login_btn">LOGIN</button></Link>
    </form>
     </div>
    </div>
        </div>
    )
}
