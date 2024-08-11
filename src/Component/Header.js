import { useState} from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [btn,setbtn]=useState("Login")
    
    return (
        <>
        
            <div className="header">
                <img className='logo'
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"  alt='logo' />

                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">  About Us</Link> </li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li>Cart</li>
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
export default Header;