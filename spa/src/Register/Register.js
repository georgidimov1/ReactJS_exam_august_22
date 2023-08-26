import { useHistory} from "react-router-dom";
import {useState} from 'react';
import React from 'react';
import services from "../services/services.js";
import  validator  from 'validator';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons'

function Register (){
    const  history = useHistory();
    const [error, setError]=useState(false)
    const [disabledButton, setDisabledButton] = useState("");
    const [check, setCheck] = useState("");

    function handleClick() {
      history.push("/login");
    }
    function onChangeHandler(e){
        if (validator.isEmail(e.target.value)) {
            setCheck(<FontAwesomeIcon icon={faCheckCircle } color="green"/>);
            setDisabledButton("")
          } else {
            setCheck(<FontAwesomeIcon icon={faTimesCircle } color="red"/>);
            setDisabledButton("disabled")
          }
    }
    function onCreateSubmitHandler(e){
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const rePassword = e.target.rePassword.value;
        
        if(password!==rePassword){
             return (setError(true))
        }
       else
       {
            services.userRegister(username, password)
            .then(
                ()=>{
                    // console.log(d.json()) 
                handleClick();
            })
            .catch((e)=>{throw new Error(e)});}
        }
        
  return ( 
                         <div className="body">
                            <h2 className="title">Register</h2>
                            <form onSubmit={onCreateSubmitHandler}>
                                <div className='password'>
                                    <input className='input' type="text" placeholder="mail@example.com*" name="username" onChange = {onChangeHandler} required/>
                                    <div className='err'>{check}</div>
                                </div>
                      
                                <div className='password'>
                                    <input className='input' type="password" placeholder="Password*" name="password" required/>
                                </div>
                                <div className='password'>
                                    <input className='input' type="password" placeholder="Confirm Password*" name="rePassword" required/>
                                </div>
                                <div className='err'>{error?'Passwords do not match':''}</div>
                                <div className="p-t-10">
                                    <button className="btn" disabled={disabledButton}>Submit</button>
                                </div>
                            </form>
                        </div>
       )}
 export default Register;