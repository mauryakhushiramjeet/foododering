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
            <div className="p-3 m-5 w-[250px]  rounded-lg bg-gray-200 hover:bg-gray-300"   >
                <img className='res-logo rounded-lg  w-[230px] h-[230px] '
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img" />
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>₹{costForTwo} </h4>
                <h4>{avgRating}Star</h4>
                <h4>{sla.deliveryTime} min</h4>
                <h4>{logdenUser}</h4>
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