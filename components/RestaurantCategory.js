import ItemsList, {ItemsListWithAddButton} from "./ItemsList";
const RestaurantCategory = ({data,index,onToggle,isActive}) => {
    const {title,itemCards} = data?.card?.card;
    const toggleContent = () => {
        onToggle(index);
    }
    return (
        <div className="w-1/2">
            <div className=" w-full bg-gray-100 rounded-2xl p-4 m-4 hover:bg-gray-200">
                <div className="header flex justify-between cursor-pointer" onClick={toggleContent}>
                    <div className="font-bold">{title}</div>
                    <div>🔽</div>
                </div>
                {isActive && <ItemsListWithAddButton items={itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;