import '../Card/Cards.css'
import {
        useState,
        useEffect
} from 'react'
import services from '../services/services'
import React from 'react';
import { useParams } from 'react-router-dom';


function Details(props){
    const params = useParams();
    const [data, setData] = useState(0);
    // const [likes, setCount] = useState();   
    useEffect(()=>{
services.getUser(params.id)
.then(res => 
    {setData(res);
    console.log(res)
}
    )
.catch((e)=>{throw new Error(e)})
    },[props, params.id])
// let likesInitalValue = Number(data.likes);
// console.log(likesInitalValue)

  function onLikeButtonClickHander(){
//       let currentLikes = likes+1; 
//      setCount(currentLikes)
// services.postLikes(props.match.params.id,{...data, "likes":currentLikes})
// .then(data => console.log(data))
// .catch((e)=>{throw new Error(e)})
    }
  
return (
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">
           <div className="card card-3">
              <div className="card-heading"></div>
              <div className="card-body">
              <img src={data} width="500rem" alt ="profile" className="center"/>
              <h2 className="title">Name: {data.username}</h2>
                <h2 className="title">Zodiac sign: none </h2> 
          
                {sessionStorage.getItem("userId")?
                <div>
                {/* <p>Likes: {likes}</p> */}
                <button className="btn btn--pill btn--green" onClick={onLikeButtonClickHander}>Like</button>
                </div>
                :<div></div>
                }  
                   
             </div>
          </div>
      </div>
  </div>
      )}

export default Details;