import {
    Link,
    useHistory
 } from "react-router-dom";
import './Header.css'
import services from '../services/services'
import {useEffect, useState} from 'react'
import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faSignIn, faSignOut, faUser} from '@fortawesome/free-solid-svg-icons'


function Header(props){
    console.log(props)
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
            <em className="title main"> Bulgarian Properties</em>
        </p>
    </div>
    <div>
     {isStateAuth===true?
             <nav>  
                <div className="left nav">
                    <p className="nav"><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></p>
                     <p className="nav"><Link to={`/myproperties/${props._id}`}>My ads</Link></p>
                     <p className="nav"><Link to="/addproperty">Add </Link></p>
                </div>
                <div className="right nav">
                     <p className="nav"><Link to={`/user/details/${props._id}`} ><FontAwesomeIcon icon={faUser} /></Link> </p>
                     <p className="nav" align="right"><Link to="/logout" onClick={onClickLogoutHandler}><FontAwesomeIcon icon={faSignOut}/></Link></p>
                </div>
           
             </nav>:
             <nav>
                <div className="left nav">
                    <p className="nav"><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></p>
                </div>
                <div className="right nav">
                    <p className="nav"><Link to="/register">Register</Link> </p>
                     <p className="nav"><Link to="/login" ><FontAwesomeIcon icon={faSignIn} /></Link></p>
                </div>
            </nav>
          }
     </div>
     </div>
)
   

    
        }

export default Header;