import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
const Header = () => {
    const [btn,setbtn]=useState("Login")
    const onlineStatus=useOnlineStatus()
    return (
        <>
            <div className="flex bg-pink-100 justify-between shadow-xl lg:bg-green-50 sm:bg-yellow-50" >
                <img className='w-28'
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"  alt='logo' />

                <div className="flex items-center">
                    <ul className="flex p-4 m-4 sm:p-2 m-2 ">
                        <li className="px-4 "> Online Status:{onlineStatus?"✅":"🔴"}</li>
                        <li className="px-4 hover:font-bold"><Link to="/">Home</Link></li> 
                        <li className="px-4 hover:font-bold"><Link to="/about">  About Us</Link> </li>
                        <li className="px-4 hover:font-bold"><Link to="/contact">Contact us</Link></li>
                        <li className="px-4 hover:font-bold">Cart</li>
                        <button className="login" onClick={()=>
                            {btn==="Login"
                                ?setbtn("Logout")
                                :setbtn("Login")}
                        }>{btn}</button>
                    </ul>
                </div>
            </div>

        </>
    )
}
////{"🏠"}{"🛒"}
export default Header;