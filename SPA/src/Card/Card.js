import './Cards.css'
import {Link} from 'react-router-dom'
import React from 'react'

function Card(props){

 return (
     <div className="card column">
         <div className="card-image">"{props.image}"</div>
         <div className="card-text">
             <span className="date">4 days ago</span>
             <h2>{props.action.toUpperCase()}</h2>
             <p>{props.info}</p>
         </div>
         <div className="card-stats">
             <div className="stat">
                 <div className="value">4<sup>m</sup></div>
                 <div className="type">read</div>
             </div>
             <div className="stat border">
                 <div className="value">5123</div>
                 <div className="type">views</div>
             </div>
             <div className="stat">
                 <div className="value">32</div>
                 <div className="type">comments</div>
             </div>
         </div>
     </div>

      )}

export default Card;