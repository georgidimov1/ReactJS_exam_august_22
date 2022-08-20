import { Link} from "react-router-dom";
import {React} from 'react'
import './Infopage.css'

function Infopage(){
   
    return(
    <div className="body info">
     
        <div>
        <label htmlFor="price">Info:</label>
            <p className='input' type="number" name="price" id="price">Already liked!</p>
        </div>
        <div className="p-t-10">
            <Link className="btn" to={`/`} id="close">Close</Link>
        </div>
    </div>
)
}

export default Infopage;