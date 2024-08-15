
const ItemList = ({ items }) => {
 console.log(items)
  return (
    <div>
      {items.map((item) => (
      <div>
          <div key={item?.card?.info?.id} className='p-3 m-3 border-gray-400 border-b-[1px] text-left flex'>
         <button  className='absolute shadow-lg bg-black text-yellow-50 rounded-lg p-1 mx-5  '>ADD+</button>
         <div> <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item?.card?.info?.imageId} className='w-32 h-32 py-1 '></img>
         </div>
          <div >
          <div className='p-2  '>
            <span>{item?.card?.info?.name}
            </span><span> -₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
          </div >
          <p className='text-xs mb-0 mx-2'>{item?.card?.info?.description}</p>
        </div>
        </div>
      </div>
      ))}

    </div>
  )
}

export default ItemList

