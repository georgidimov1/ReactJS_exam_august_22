import './Login.css'
import {useHistory} from "react-router-dom";
import {useEffect, useState} from 'react';
import React from 'react';
import services from "../services/services.js";
import  validator  from 'validator';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons'


function Login (){
     const [check, setCheck] = useState("");
    const [disabledButton, setDisabledButton] = useState("");
   

    function onChangeHandler(e){
        if (validator.isEmail(e.target.value)) {
            setCheck(<FontAwesomeIcon icon={faCheckCircle } color="green"/>);
            setDisabledButton("")
          } else {
            setCheck(<FontAwesomeIcon icon={faTimesCircle } color="red"/>);
            setDisabledButton("disabled")
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
                                <div className='input_main'>
                                <label className='label_ek1'>
                                Username*: <input className='input' type="text" placeholder="mail@example.com" name="username" onChange = {onChangeHandler} required />
                                </label>
                                <div className='err'>{check}</div>
                                </div>
                                <div className='input_main'>
                                <label className='label_ek1'>
                                Password*: <input className='input' type="password" placeholder="Password*" name="password" required/>
                                </label>
                                </div>
                              
                                <button className="btn" disabled={disabledButton}>Submit</button>
                                                
                            </form>
                            </div>


    )}
 export default Login;