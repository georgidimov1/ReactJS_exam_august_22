import { useHistory} from "react-router-dom";
import React from 'react';
import services from "../services/services.js";
import "./Add.css"
function Add (){
    const  history = useHistory();
    function handleClick() {
        history.push("/");
      }
    function onCreateSubmitHandler(e){
        e.preventDefault();
        let propertyData = {
            'action': e.target.action.value,
            'image': e.target.image.value,
            'type': e.target.type.value,
            'city': e.target.city.value,
            'rooms': e.target.rooms.value,
            'info': e.target.info.value,
            'price': e.target.price.value,
            'owner': sessionStorage.getItem("userId")
        }
        console.log(propertyData)

            services.postData(propertyData)
            .then(()=>{
                handleClick()
                console.log('postData')
            })
            .catch((e)=>{throw new Error(e)});}

  return ( 
                         <div className="body">
                            <h2 className="title">Add A Property</h2>
                            <form onSubmit={onCreateSubmitHandler}>
                            <div>
                                <label htmlFor="action">Choose an action: </label>
                                    <select name="action" id="action">
                                    <option value="sell">Sell</option>
                                    <option value="rent">Rent</option>
                                    <option value="buy">Buy</option>
                                    </select>
                            </div>
                            <div>
                                    <label htmlFor="image">Choose a property picture:</label>
                                    <input type="file" id="image" 
                                    name="image" accept="image/png, image/jpeg" required/>
                            </div>
                                <div>
                                <label htmlFor="type">Choose type: </label>
                                    <select name="type" id="type">
                                    <option value="house">House</option>
                                    <option value="flat">Flat</option>
                                    <option value="room">Room</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="city">City*: </label>
                                    <input className='input' type="text" name="city" id="city" required/>
                                </div>
                                <div>
                                <label htmlFor="rooms">Number of rooms*: </label>
                                    <input className='input' type="number" name="rooms" id="rooms" required min="1" max="10"/>
                                </div>
                                <div>
                                <label htmlFor="info">Additional information: </label>
                                    <textarea className='input' type="text" id="info" name="info"/>
                                </div>
                                <div>
                                <label htmlFor="price">Price: </label>
                                    <input className='input' type="number" name="price" id="price"/>
                                </div>
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