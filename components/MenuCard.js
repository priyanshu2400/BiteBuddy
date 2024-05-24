import {useDispatch} from 'react-redux';
import { CDN_URL } from "./utils/constants"
import { addItems, removeItems } from "./utils/cartSlice";
const MenuCard = ({item}) => {
    const dispatch = useDispatch();
    const handleRemoveItem = (item) => {
        dispatch(removeItems(item));
    }
    return (
        <div  className="flex justify-between m-4 p-4 border-b-2 rounded-2xl hover:shadow-2xl">
            <div className="w-2/3 mr-3 flex flex-col justify-evenly">
                <div className="font-bold text-lg">{item?.card?.info?.name}</div>
                <div className="">{item?.card?.info?.description}</div>
                <div className="font-bold">₹{(item?.card?.info?.price)  ? (item?.card?.info?.price/100) : (item?.card?.info?.defaultPrice/100)}</div>
            </div>
            <div className="relative w-1/3 rounded-xl">
                <div className="absolute mx-16">
                    <button className="bg-white text-green-500 font-extrabold hover:bg-slate-200 p-1 rounded-md"
                    onClick={() => handleRemoveItem(item)}
                    >REMOVE</button>
                </div>
                <img className="rounded-xl w-full" src={CDN_URL+item?.card?.info?.imageId}></img>
            </div>
        </div>
    )
}
export default MenuCard;