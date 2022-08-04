import './Login.css'
import { useHistory} from "react-router-dom";
import {useEffect} from 'react';
import services from "../services/services.js";

function Login (){
    let history = useHistory();
    function handleClick() {
      history.push("/");
     window.location.reload();
    }
    
    function onLoginSubmitHandler(e){
        e.preventDefault();
        const username = e.target.username.value;
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
                                <div className='password'>
                                    <input className='input'  type="text" placeholder="Username*" name="username" required/>
                                </div>
                      
                                <div className='password'>
                                    <input className='input' type="password" placeholder="Password*" name="password" required/>
                                </div>
                              
                                <button className="btn">Submit</button>
                                
                            </form>
                            </div>


    )}
 export default Login;