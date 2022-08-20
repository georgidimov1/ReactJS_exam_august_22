import './myDetails.css';
import React, { useEffect} from 'react';
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
                                    <input className="input" type="text" placeholder="ivanov@ivanov.com" name="mail" required/>
                                </div>
                                <div className='password'>
                                    <input className="input" type="text" placeholder="Phone" name="phone"/>
                                </div>
                                    <button className="btn">Save</button>
                                </form>
                        </div>
     )}
 export default MyDetails;