// import { Restapi } from "./content"
import Restcard ,{withPromotedLabal}from "./Restcard";
import useOnlineStatus from "./useOnlineStatus";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

    const [ListofRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestuarent, setFilteredRestuarent] = useState([])
    const [searchText, setsearchText] = useState("")
    const[Mind,setMind]=useState([])
 const RestaurantCardPromoted=withPromotedLabal(Restcard)
    useEffect(() => {
        fetchData();
        console.log("body",ListofRestaurant)
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const js = await data.json();
        console.log(js)
        //  setRestapi(json.data.cards)
        setListOfRestaurant(js?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestuarent(js?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
const onlineStatus=useOnlineStatus()
if(onlineStatus===false) return  <h1>Looks like you're Offline!!! Please cheak your Internet Connection.</h1>
    return ListofRestaurant.length === 0 ? (<Shimmer />) : (
        <>
            <div className="body">
                <div className="filter flex">
                    <div className="search p-4 m-4">
                        <input type="text" className=" border border-solid border-black w-[300px]" value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />
                        <button className="bg-green-100 px-4 py-2 m-4 rounded-lg" onClick={() => {
                            const filterrestaurant = ListofRestaurant.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestuarent(filterrestaurant)

                        }}> {"🔍"}Search</button>

                    </div>
                  
                   <div className="search p-4 m-4 items-center">
                   <button className=" bg-gray-200 px-4 py-2  m-4 rounded-lg " onClick={() => {
                        const filterList = ListofRestaurant.filter(
                            (res) => res.info.avgRating > 4.3
                        )
                        setFilteredRestuarent(filterList)
                    }}>Top Rated Restaurant</button>
                   </div>
                </div>
                <div className="res-container flex flex-wrap">
                    {
                        filteredRestuarent.map((data) => (
                           <Link key={data.info.id} to={"/restaurent/"+data.info.id}> {data.info.promoted?<RestaurantCardPromoted  datas={data}/>:<Restcard  datas={data} />} </Link>
                        ))
                    }

                </div>
            </div>
        </>
    )
}
export default Body;