import Cards from './Cards'
import {DataContext} from '../contexts/DataContext'
import React, {
    useEffect, 
    useState
  } from 'react'
import services from '../services/services'
function CardGrid (props){
    const [cardsAll, setCardsAll] = useState([]);
    useEffect(()=>{
        if(props.token!==null){
            console.log(props.token)
            services.getAll()
            .then((res)=>{setCardsAll(res)})
            .catch((e)=>{throw new Error(e)});
        }

      },[])
        return ( 
        <span>
        {props.token!==null?
            <div className="cards">
                <DataContext.Provider value={cardsAll}>
                    <Cards/>
                </DataContext.Provider>
            </div>
            :
            <div className="cards">
                <DataContext.Provider value={cardsAll}>
                    <Cards/>
                </DataContext.Provider>
            </div>
        }    
        </span>  

    )
}
export default CardGrid;