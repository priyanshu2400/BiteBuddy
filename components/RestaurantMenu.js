import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import {OfflineScreen} from "./OfflineScreen";
import ShimmerRM from "./ShimmerRM";
const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    const onlineStatus = useOnlineStatus();

    const [activeIndex, setActiveIndex] = useState(null); // Track currently active title

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
     };

    if(onlineStatus == false){
        return <OfflineScreen/>
    }
    if (resInfo == null) {
        return <ShimmerRM/>
    }
    const {name, cuisines, costForTwoMessage} = resInfo.cards[2]?.card?.card?.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return (
        <div className="flex justify-center flex-col items-center">
            <div className=" my-4 res-details flex flex-col justify-center items-center">
                <h2 className="m-4 text-2xl font-bold">{name}</h2>
                <h3 className="m-4 font-bold">{cuisines+","} {costForTwoMessage}</h3>
            </div>
            {
                categories.map(
                    (category,index) => 
                    <RestaurantCategory
                        key={category.card.card.title}  
                        data={category}
                        index = {index}
                        onToggle = {handleToggle}
                        isActive={index === activeIndex}
                    />
                )
            }
        </div>
    )
}

export default RestaurantMenu;
