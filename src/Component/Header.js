import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContex from "./UserContex";
import { useSelector } from "react-redux";
const Header = () => {
    const [btn,setbtn]=useState("Login")
    const onlineStatus=useOnlineStatus()
    const{logdenUser}=useContext(UserContex)
    //subscribing to the store using useSelector
    const cartItem=useSelector((store)=>store.cart.item)
// console.log(cartItem)
  const[darkMode,setMode]=useState(false);

const Handlemode=()=>{
setMode(!darkMode)
}
    return (
        <>

          <div className={`${darkMode&& "dark"}`}>
          <div className="flex bg-pink-100 justify-between shadow-xl lg:bg-blue-100 sm:bg-yellow-50 dark:bg-[#0A131B]" >
                <img className='w-28'
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"  alt='logo' />

                <div className="flex items-center">
                    <ul className="flex p-4 m-4 sm:p-2 m-2 ">
                        <li className="px-4 dark:text-white "> Online Status:{onlineStatus?"✅":"🔴"}</li>
                        <li className="px-4 hover:font-bold dark:text-white"><Link to="/">Home</Link></li> 
                        <li className="px-4 hover:font-bold dark:text-white"><Link to="/about">  About Us</Link> </li>
                        <li className="px-4 hover:font-bold dark:text-white"><Link to="/contact">Contact us</Link></li>
                        <li className="px-4 hover:font-bold dark:text-white"><Link to="/cart">🛒Cart-[{cartItem.length}]</Link></li>
                        <button className="login dark:text-white" onClick={()=>
                            {btn==="Login"
                                ?setbtn("Logout")
                                :setbtn("Login")}
                        }>{btn}</button>
                          <li className="px-4 font-bold dark:text-white">{logdenUser}</li>
                         <li><button className="px-4 rounded-lg font-bold bg-[#0A131B] text-white  dark:bg-white text-slate-900"
                         onClick={Handlemode}>{darkMode?'Light':'Dark'}</button></li>
                        <li className="px-4 font-bold"></li>
                    </ul>
                </div>
            </div>

          </div>
        </>
    )
}
////{"🏠"}{"🛒"}
export default Header;