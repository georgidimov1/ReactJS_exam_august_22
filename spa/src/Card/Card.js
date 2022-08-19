import './Cards.css'
import {Link, useHistory} from 'react-router-dom'
import React from 'react'
import services from '../services/services'

function Card(props){
    const history = useHistory()
    function handleClick() {
        history.push("/");
      }
    const isUser = sessionStorage.getItem("userId")
    let editDeleteSet = false
    if(props.owner===isUser){editDeleteSet= true;}
    function onClickDeleteHandler(){
        services.deleteOne(props._id)
        .then(() =>{handleClick()})
        .catch((e)=>{throw new Error(e)});
    }

    function handleLikeClick (){
        console.log(props._id)
    }

 return (
     <div className="card column">
         <img className="card-image" alt= "" src={props.image}></img>
         <div className="card-text">
             <span className="value">{props.city.toUpperCase()}</span>
             <h2>{props.action.toUpperCase()}</h2>
             
         </div>
         <div className="card-stats">
             <div className="stat">
                {props.type==='room'?
                    <div className="value">{props.type.toUpperCase()}</div>
                    :
                <span>
                    <div className="value">{props.rooms} rooms</div>
                    <div className="value">{props.type.toUpperCase()}</div>
                </span>}
                        
             </div>
             <div className="stat border">
                 {editDeleteSet?
                    <span>
                        <div className="value">5 {props.likes}</div>
                        <div className="value">likes</div>
                    </span>
                              :
                isUser?
                 <button className='btn like' onClick={handleLikeClick}>Like</button>
                    :
                    <Link to={`/properties/details/${props._id}`}>Click for info</Link>

                 }
             </div>
             <div className="stat">
            {editDeleteSet?
          
             <span className="stat">
                    <Link to={`/properties/delete/${props._id}`} onClick={onClickDeleteHandler}><strong>DELETE</strong></Link>
                    <Link to={`/properties/edit/${props._id}`}><strong>EDIT</strong></Link>
             </span>
             :
             <div className="value">Price: {props.price}</div>
             }
             </div>
         </div>
     </div>

      )}

export default Card;