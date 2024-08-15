import React from 'react'
import ItemList from './ItemList'
// import { useState } from 'react'
const RestaurantCategories = ({data,ShowItem,setShowIndex}) => {
    // console.log(data) 
//     const[ShowItem,setShowItem]=useState(false)
    const handleClick=()=>{
setShowIndex();  

    }
  return (
    <div>
    <div className='w-6/12 bg-purple-200 shadow-lg items-center mx-auto my-4 p-4'>
    <div className=' flex justify-between cursor-pointer'  onClick={handleClick}>
    <span className='text-lg font-bold '>{data.title}({data.itemCards.length})</span>
    <span  >⬇️</span>
    </div>
   { ShowItem&&<ItemList items={data.itemCards}/>}
    </div>
    </div>

  )
}

export default RestaurantCategories
