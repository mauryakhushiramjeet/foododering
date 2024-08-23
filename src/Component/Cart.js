import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../Utill/CartSlice"

const Cart = () => {
    const cardItem=useSelector((store)=>store.cart.item)
    const dispatch=useDispatch()
    const handleclearcart=()=>{
      dispatch(clearCart())
    }
  return (
    <div className=" m-4 p-4 text-center">
      <h1 className="font-bold text-xl my-2">Cart</h1>
    <div className="m-auto w-6/12 shadow-2xl">
    <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleclearcart}>Clear Cart</button>
    {cardItem.length===0&&<h1 className="text-lg my-3 text-red-800">Cart is empty . Add item to the Cart{"🛒"}!!</h1>}
    <ItemList items={cardItem}/>
    </div>
    </div>
  )
}

export default Cart
