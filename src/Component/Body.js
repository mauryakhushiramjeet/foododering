// import { Restapi } from "./content"
import Restcard, { withPromotedLabal } from "./Restcard";
import useOnlineStatus from "./useOnlineStatus";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContex from "./UserContex";

const Body = () => {
    const { setUserName, logdenUser } = useContext(UserContex)
    const [ListofRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestuarent, setFilteredRestuarent] = useState([])
    const [searchText, setsearchText] = useState("")
    // const [Textclr, setTextClr] = useState("#333333")
    // const [backgroundColor, setbackgroundColor] = useState("white")
   
    const RestaurantCardPromoted = withPromotedLabal(Restcard)
    useEffect(() => {
        fetchData();
        // console.log("body", ListofRestaurant)
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const js = await data.json();
        // console.log(js)
        //  setRestapi(json.data.cards)
        setListOfRestaurant(js?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestuarent(js?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) return <h1>Looks like you're Offline!!! Please cheak your Internet Connection.</h1>
    return ListofRestaurant.length === 0 ? (<Shimmer />) : (
        <>
           <div className="dark">
           <div className="body dark:bg-[#040B0E]"  >
                <div className="filter flex ">
                    <div className="search p-3 m-3">
                        <input type="text" className=" bg-purple-300 outline-none w-[300px]  font-bold border border-black p-2 text-black
                         dark:bg-[#0A131B]   border border-green-100"placeholder="Search here.."
                         value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />
                        <button className="bg-green-400 px-4 py-2 m-3 rounded-lg text-black dark:bg-[#0A131B]
                         text-gray-100 " onClick={() => {
                            const filterrestaurant = ListofRestaurant.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestuarent(filterrestaurant)
                        }}> {"🔍 "}Search</button>
                    </div>
                    <div className="search p-3  items-center flex">
                        <button
                            className=" bg-gray-500 px-4 py-2 text-black  rounded-lg  dark:bg-[#0A131B] text-white" onClick={() => {
                                const filterList = ListofRestaurant.filter(
                                    (res) => res.info.avgRating > 4.3
                                )
                                setFilteredRestuarent(filterList)
                            }}>Top Rated Restaurant{"❤️"}</button>
                    </div>
                    <div className="p-3 m-3 items-center flex">
                        <label className= " dark:text-white" >User Name-</label>
                        <input className="border border-black  text-white bg-slate-600 dark:bg-[#36454f] text-gray-100" value={logdenUser} onChange={(e) => 
                            setUserName(e.target.value)} />
                    </div>
                   
                </div>
                <div className="res-container flex flex-wrap">
                    {
                        filteredRestuarent.map((data) => (
                            <Link key={data.info.id} to={"/restaurent/" + data.info.id}> {data.info.promoted ? <RestaurantCardPromoted datas={data} /> : <Restcard datas={data} />} </Link>
                        ))
                    }

                </div>

            </div>
           </div>
        </>
    )
}
export default Body;