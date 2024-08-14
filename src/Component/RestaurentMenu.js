import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurentMenu from "../useRestaurentMenu"
import RestaurantCategories from "./RestaurantCategories"

const RestaurentMenu = () => {
    
    const{resId}=useParams()
  const resInfo=useRestaurentMenu(resId)
    if(resInfo===null){
        return<Shimmer/>
    }
    const {name,cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const Categories=()=>{
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
       {
        return  c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
       }
        )
    }
   console.log("n"+Categories)
    // console.log(itemCards)
    // console.log(name)

    return (
        <div className='text-center'>
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
          {/* {Categories.map((category)=>(
          <RestaurantCategories />)
        )} */}
            {/* <h2>MENU</h2>
            <ul> 
                {itemCards.map((items)=>(
                <li key={items.card.info.id}>{items.card.info.name} -{"Rs."}
                {items.card.info.price/100 ||items.card.info.defaultPrice/100}</li> 
                
               ))}
            </ul> */}

        </div>
    )
}

export default RestaurentMenu
