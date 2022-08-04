import './Cards.css'
import Card from './Card'
import React, {
  useContext,
  //useEffect, 
  //useState
} from 'react'
import {DataContext} from '../contexts/DataContext'


function Cards(){
  const cardsAll = useContext(DataContext);

return(
  
  cardsAll.map(
    (x)=>{
      return(
       
            <Card key={x._id} {...x} />
        
              
     
      )       
    }
  )

)

    
}

export default Cards; 