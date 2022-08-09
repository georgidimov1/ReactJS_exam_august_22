import { useHistory} from "react-router-dom";
import {useState} from 'react';
import React from 'react';
import services from "../services/services.js";
function Add (){
    let history = useHistory();
    let[error, setError]=useState(false)

    function handleClick() {
      history.push("/login");
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
                            <h2 className="title">Add Property</h2>
                            <form onSubmit={onCreateSubmitHandler}>
                            <div className='password'>
                                <label for="type">Choose an action: </label>
                                    <select name="type" id="type">
                                    <option value="sell">Sell</option>
                                    <option value="rent">Rent</option>
                                    <option value="buy">Buy</option>
                                    </select>
                            </div>
                            <div className='password'>
                                    <label for="img">Choose a property picture: </label>
                                <input type="file"
                                    id="img" name="image"
                                    accept="image/png, image/jpeg"/>
                             </div>
                                <div className='password'>
                                    <input className='input' type="text" placeholder="Name*" name="name" required/>
                                </div>
                      
                                <div className='password'>
                                    <input className='input' type="text" placeholder="City*" name="city" required/>
                                </div>
                                <div className='password'>
                                    <input className='input' type="number" placeholder="Room number" name="rooms" required min="1" max="10"/>
                                </div>
                                <div className='password'>
                                    <input className='input' type="text" placeholder="Additional information" name="information"/>
                                </div>
                                {/* <div className='err'>{error?'Passwords do not match':''}</div> */}
                                <div className="p-t-10">
                                    <button className="btn">Submit</button>
                                </div>
                            </form>
                        </div>
       )}
 export default Add;

//  type: {type: String, required: true},
//  image:{type: String, },
//  name: {type: String, required: true, unique: true},
//  city: {type: String, required: true},
//  rooms: { type: Number, min: 1, max: 100 }, 
//  information: [String],
//  price: [String],
//  owner: {type: String, required: true}