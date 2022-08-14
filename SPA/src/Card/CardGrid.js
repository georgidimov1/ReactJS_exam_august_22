import React, { useState, useEffect } from 'react';
import services from '../services/services';
import Card from './Card';
import './Cards.css'

function CardGrid(props) {
  console.log(props)
  const [cardsData, setCardsData] = useState([]);
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
              {cardsData.map((x)=>{return(<Card key={x._id}{...x}/>)})}
          </div>
               ) 
}

export default CardGrid;