import './Cards.css'
import {Link} from 'react-router-dom'
//import {useContext} from 'react'
//import {useState} from 'react'
//import services from '../services/services'

function Card(props){

 return (
    <div className="card bg-gra-01 font-poppins">
        <div className="wrapper wrapper--w780">
            <div className="card card-3">
               <div className="card-heading"></div>
                    <div className="card-body">
                         <h2 className="title">Name: {props.username}</h2>
                         <h2 className="title">Zodiac sign: {props.zodiac}</h2>
                            <div className="p-t-10">
                                <Link to={`/user/details/${props._id}`}><button className="btn btn--pill btn--green" >Details</button></Link>
                            </div>   
                </div>
            </div>
        </div>
    </div>
 
      )}

export default Card;