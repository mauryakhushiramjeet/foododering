import { useContext } from "react"
import UserContex from "./UserContex"
const Restcard = ({datas}) => {
    const{logdenUser}=useContext(UserContex)
    const {
        name,
        cloudinaryImageId,
        costForTwo,
        avgRating,
        sla,
        cuisines

    } = datas?.info
    return (
        <>
            <div className="p-3 m-5 w-[250px]  rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-[#333B3F]"   >
                <img className='res-logo rounded-lg  w-[230px] h-[230px] '
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img" />
                <h3 className="font-bold py-4 text-lg   dark:text-white">{name}</h3>
                <h4 className="dark:text-white" >{cuisines.join(",")}</h4>
                <h4 className="dark:text-white" >₹{costForTwo} </h4>
                <h4 className="dark:text-white" >{avgRating}Star</h4>
                <h4 className=" dark:text-white" >{sla.deliveryTime} min</h4>
                <h4 className="dark:text-white" >{logdenUser}</h4>
            </div>
        </>
    )
}
export const withPromotedLabal=(Restcard)=>{
    return(props)=>{
        return(
            <div >
                <label  className="bg-black absolute text-white">Promoted</label>
                <Restcard {...props}/>
            </div>


        )
    }
}
export default Restcard