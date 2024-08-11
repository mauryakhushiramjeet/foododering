// import { Restapi } from "./content"
import Restcard from "./Restcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

    const [ListofRestaurantapi, setRestapi] = useState([])
    const [listOfResturant, setlistOfResturant] = useState([])
    const [searchText, setsearchText] = useState("")

    useEffect(() => {
        fetchData();
        // console.log("body render")
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const js = await data.json();
        // console.log(json)
        //  setRestapi(json.data.cards)
        setRestapi(js?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setlistOfResturant(js?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    return ListofRestaurantapi.length === 0 ? (<Shimmer />) : (
        <>
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-btn" value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />
                        <button onClick={() => {
                            const filterrestaurant = ListofRestaurantapi.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setlistOfResturant(filterrestaurant)

                        }}>Search</button>

                    </div>
                    <button className="filter-btn" onClick={() => {
                        const filterList = ListofRestaurantapi.filter(
                            (res) => res.info.avgRating > 4.5
                        )
                        setlistOfResturant(filterList)
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="res-container">
                    {
                        listOfResturant.map((data) => (
                            <Restcard key={data.info.id} datas={data} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
export default Body;