import {
    Link,
    useHistory
 } from "react-router-dom";
import './Header.css'
import services from '../services/services'
import {useEffect, useState} from 'react'
import React from 'react';


function Header(props){
   const [isStateAuth, setAuth] = useState(0);
   let history = useHistory();
   function handleClick() {
     history.push("/");
    window.location.reload();
   }
    function onClickLogoutHandler(){
        services.userLogout()
        setAuth(false)
        handleClick() 
    }
    
    useEffect(() => {
        if (props.token) {
            return setAuth(true)
        }
        //console.log(`useEffect:${isStateAuth}`)

   },[props.token, isStateAuth])
   
     return (
    <div className="header">
    <div>
        <p className="logo">
            <a href="/">
                <img src="homeregular_106344.png" alt="home" width="50" height="50" />
            </a>
            <h1>Bulgarian Properties</h1>
        </p>
    </div>
    <div>
     {isStateAuth===true?
             <nav>
                     <p className="nav"><Link to="/">Home</Link></p>
                     <p className="nav"><Link to="/user" >Hello, {props.username}</Link> </p>
                     <p className="nav"><Link to="/myproperties">My ads</Link></p>
                     <p className="nav"><Link to="/addproperty">Add</Link></p>
                     <p className="nav" align="right"><Link to="/logout" onClick={onClickLogoutHandler}>Logout</Link></p>
             </nav>:
             <nav>
                     <p className="nav"><Link to="/">Home</Link></p>
                     <p></p>
                     <p></p>
                     <p className="nav"><Link to="/register">Register</Link> </p>
                     <p className="nav"><Link to="/login" >Login</Link></p>
             </nav>
          }
     </div>
     </div>
)
   

    
        }

export default Header;