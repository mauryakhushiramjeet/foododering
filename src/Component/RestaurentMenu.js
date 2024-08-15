import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurentMenu from "../useRestaurentMenu"
import RestaurantCategories from "./RestaurantCategories"
import { useState } from "react"

const RestaurentMenu = () => {
    
    const{resId}=useParams()
    const[ShowIndex,setShowIndex]=useState(0)

  const resInfo=useRestaurentMenu(resId)
    if(resInfo===null){
        return<Shimmer/>
    }
    const {name,cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return  c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
       })
    
//    console.log(categories)
    // console.log(itemCards)
    // console.log(name)

    return (
        <div className='text-center'>
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
          {categories.map((e,index)=>(
          <RestaurantCategories  
          data={e.card?.card} 
          key={Math.random()*100} 
          ShowItem={index===ShowIndex?true:false}
          setShowIndex={()=>setShowIndex(index)} />)
        )}
           

        </div>
    )
}

export default RestaurentMenu
