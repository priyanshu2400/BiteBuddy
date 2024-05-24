import { CDN_URL } from "./utils/constants";
import React from "react";
const RestaurantCard = (props) => {
    const {resdata} = props;
    const { name , avgRating, areaName} = resdata?.info;
    return (
        <div data-testid="resCard" className=" -z-20 w-[210px] p-2 m-4 rounded overflow-hidden hover:shadow-2xl h-[20rem] bg-white flex flex-col items-center relative">
            <div className="w-full h-[50%] flex justify-center items-center relative m-2">
                <img className="absolute rounded inset-0 w-full h-full object-cover" src={CDN_URL + resdata.info.cloudinaryImageId} />
            </div>
            <div className="flex w-full m-1 flex-row justify-between">
                <h3 className="text-black font-bold text-lg w-[60%]">{name}</h3>
                <p className="h-7 inline text-white text-sm rounded-lg bg-green-500 p-1">{avgRating} 🌟</p>
            </div>
            <p className="text-gray-700 text-base m-1 w-full">{areaName}</p>
        </div>

    );
}
export default RestaurantCard;

export const ResCardWithPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative z-10">
                <label className="absolute top-0 left-0 bg-green-600 rounded-lg m-2 p-2 text-white">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}