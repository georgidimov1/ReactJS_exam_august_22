import { Link, useParams} from "react-router-dom";
import {React, useState, useEffect} from 'react'
import services from "../services/services.js";
import './Info.css'

function Info(props){
    const params = useParams()
    const[one, updateOne] = useState([])

    
    useEffect(() => {
    services.getOne(params.id)
    .then(x => updateOne(x))
    .catch((e)=>{throw new Error(e)});
    }, [params.id])

    return(
    <div className="body info">
    <h2 className="title">Additional information</h2>
     
        <div>
        <label htmlFor="price">Info:</label>
            <p className='input' type="number" name="price" id="price">{one.info}</p>
        </div>
        <div className="p-t-10">
            <Link className="btn" to={`/`} id="close">Close</Link>
        </div>
    </div>
)
}

export default Info;