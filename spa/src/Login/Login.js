import './Login.css'
import {useHistory} from "react-router-dom";
import {useEffect, useState} from 'react';
import React from 'react';
import services from "../services/services.js";


function Login (){
    const [user, setUser] = useState("")
    const [message, setMessage] = useState("");

   

    function onChangeHandler(e){
        setUser(e.target.value)
        const regEx = /[a-z_.]+(@)[a-z]+(\.)+[a-z]{0,4}(\.)?[a-z]{1,4}$/gim;
        if (regEx.test(user.toLowerCase())) {
           setMessage("");
           } else if (!regEx.test(user) && user !== "") {
                setMessage("Invalid email");
           } else {
               setMessage("");
           }
    }

    
    let history = useHistory();
    function handleClick() {
      history.push("/");
     window.location.reload();
    }
    
    function onLoginSubmitHandler(e){
        e.preventDefault();
        const username = e.target.username.value.toLowerCase();
        const password = e.target.password.value;
            services.userLogin(username, password)
              .then(data => {
                services.sessionStore(data);
                console.log(data);
                handleClick();
                
                 })
               
              .catch((e)=>{throw new Error(e)});
        }
        useEffect(function () {
            document.title = `Please entry our credetials`;
        }, []);
        
  return ( 
                         <div className="body">
                            <h2 className="title">Login</h2>
                            <form onSubmit={onLoginSubmitHandler}>
                            <div className="label_ek1">Username*:</div>
                                <div className='password'>
                                    <input className='input' type="text" placeholder="mail@example.com" name="username" value = {user} onChange = {onChangeHandler} required />
                                </div>
                                <div className='err'>{message}</div>
                                <div className="label_ek1">Password*:</div>
                                <div className='password'>
                                    <input className='input' type="password" placeholder="Password*" name="password" required/>
                                </div>
                              
                                <button className="btn">Submit</button>
                                                
                            </form>
                            </div>


    )}
 export default Login;