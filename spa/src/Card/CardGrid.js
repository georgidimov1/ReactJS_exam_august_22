import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import services from '../services/services';
import Card from './Card';
import './Cards.css'

function CardGrid(props) {
const params = useParams()
//console.log(params.id)
 const [cardsData, setCardsData] = useState([]);
        useEffect(() => {
              services.getAll()
              .then(res=>{
                setCardsData(res);
                          }
                )
              .catch((e)=>{throw new Error(e)});
        }, []);

        useEffect(() => {
          services.getAll()
          .then(res=>{
            setCardsData(res);
                      }
            )
          .catch((e)=>{throw new Error(e)});
    }, []);

        return (
         <div className='gridMain'>
      
           {params.id?cardsData.filter(data => data.owner === params.id).map((x)=>{ return(<Card key={x._id}{...x}/>)}):cardsData.map((x)=>{ return(<Card key={x._id}{...x}/>)})}
              
       
        </div>
               ) 
}

export default CardGrid;