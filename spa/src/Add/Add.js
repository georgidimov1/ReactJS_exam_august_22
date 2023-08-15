import { useHistory, useParams} from "react-router-dom";
import {React, useEffect, useState} from 'react';
import services from "../services/services.js";
import "./Add.css"
function Add (){
    const userCurrent = sessionStorage.getItem("userId")
    const  history = useHistory();
    const params = useParams()
    const [cardOne, setCardOne] = useState([]);
    const [action, setAction] = useState(cardOne.action);
    const [type, setType] = useState(cardOne.image);

    useEffect(() => {
            if(params.id){
            services.editOne(params.id)
              .then(res=>{
                setCardOne(res);
                          }
                )
              .catch((e)=>{throw new Error(e)});
            } else {console.log('nqma')}
        }, [params.id]);

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

         if(params.id){
            services.editOne(params.id, propertyData)
            .then(()=>{
                history.push(`/myproperties/${userCurrent}`)
            })
            .catch((e)=>{throw new Error(e)})
             }
            else {
                services.postData(propertyData)
                .then(()=>{
                    history.push(`/myproperties/${userCurrent}`)
                })
                .catch((e)=>{throw new Error(e)});
            }
        }

  return ( 
                         <div className="body">
                            <h2 className="title">{params.id?"Edit":"Add"} A Property</h2>
                            <form onSubmit={onCreateSubmitHandler}>
                            <div>
                                <label htmlFor="action">Choose an action: </label>
                                    <select name="action" id="action" value = {action} onChange = {(e)=> setAction(e.target.value)}>
                                    <option value="sell">Sell</option>
                                    <option value="rent">Rent</option>
                                    <option value="buy">Buy</option>
                                    </select>
                            </div>
                            <div>
                                    <label htmlFor="image">Choose a property picture:</label>
                                    <input type="text" id="image" 
<<<<<<< Updated upstream:spa/src/Add/Add.js
                                    name="image" accept="image/png, image/jpeg" defaultValue={cardOne.image}/>
=======
                                    name="image" accept="image/png, image/jpeg" required/>
>>>>>>> Stashed changes:SPA/src/Add/Add.js
                            </div>
                                <div>
                                <label htmlFor="type">Choose type: </label>
                                    <select name="type" id="type" value = {type} onChange = {(e)=> setType(e.target.value)}>
                                    <option value="house">House</option>
                                    <option value="flat">Flat</option>
                                    {action==="rent"?<option value="room">Room</option>:""}
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="city">City*: </label>
                                    <input className='input' type="text" name="city" defaultValue={cardOne.city} id="city" required/>
                                </div>
                                <div>
                                <label htmlFor="rooms">Number of rooms*: </label>
                                    <input className='input' type="number" name="rooms" id="rooms" defaultValue={cardOne.rooms} required min="1" max="10"/>
                                </div>
                                <div>
                                <label htmlFor="info">Additional information: </label>
                                    <textarea className='input' type="text" id="info" name="info" defaultValue={cardOne.info}/>
                                </div>
                                <div>
                                <label htmlFor="price">Price: </label>
                                    <input className='input' type="number" name="price" id="price" defaultValue={cardOne.price}/>
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