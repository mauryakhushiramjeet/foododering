const Restcard = (props) => {
    const { datas } = props
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
            <div className="res-card" >
                <img className='res-logo'
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img" />
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>₹{costForTwo} </h4>
                <h4>{avgRating}Star</h4>
                <h4>{sla.deliveryTime} min</h4>
            </div>
        </>
    )
}
export default Restcard