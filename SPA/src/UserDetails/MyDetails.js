import './myDetails.css';
import React, { useEffect, useState} from 'react';
import services from "../services/services.js"
import { useHistory } from "react-router-dom";
import getZodiacSign from "../services/getZodiacsign"


function MyDetails (){
    let username = sessionStorage.getItem("username");
    let history = useHistory();

  function handleClick() {
    history.push("/");
  }
//   const [gender, setGender] = useState('');
//   function onChangeRadioButtonHandler(e){
//    setGender(e.target.value)
//       }
  function onCreateSubmitHandler(e){
         e.preventDefault();
         let data = {
                "_filename": e.target.myImage.value,
                "birthday": e.target.birthday.value,
                "gender": e.target.gender.value,
                "phone": e.target.phone.value,
                "zodiac": getZodiacSign(e.target.birthday.value),
                "username": username
            }
            services.postData(data)
            .then((data)=> {
                             handleClick()
                        
                    }
                )
            .catch((e)=>{throw new Error(e)})
            
}
    

        useEffect(function () {
            document.title = `Please entry our details`;
        }, []);

   
        
    return ( 
             <div className="body">
                            <h2 className="title">{username}'s Registration Info</h2>
                            <form onSubmit={onCreateSubmitHandler}>
                                <div className='password'>
                                <label htmlFor="picture">Select a Picture:</label>
                                <input className="input" id="picture" type="picture" name="myImage" />
                                </div>
                                <div className='password'>
                                    <input className="input" type="datetime-local" name="birthday" required/>
                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                                <div className='password' >
                                    <div className="rs-select2 js-select-simple select--no-search">
                                    <label>Select a Gender: </label>
                                        <select name="gender">
                                            <option disabled >Gender</option>
                                            <option defaultValue="male">Male</option>
                                            <option defaultValue="female">Female</option>
                                            <option defaultValue="other">Other</option>
                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div>
                                </div>
                                <div className='password'>
                                    <input className="input" type="text" placeholder="Phone" name="phone"/>
                                </div>
                                    <button className="btn">Save</button>
                                </form>
                        </div>
     )}
 export default MyDetails;