import MenuCardWithAddButton from "./MenuCardWithAddButton";
import MenuCard from "./MenuCard";
const ItemsList = ({items}) => {
    return (
        <div>
            {items.map((item) => <MenuCard key={item?.card?.info?.id} item={item}/>)}
        </div>
    )
}
export default ItemsList;

export const ItemsListWithAddButton = ({items}) => {
    return (
        <div>
            {items.map((item) => <MenuCardWithAddButton key={item?.card?.info?.id} item={item}/>)}
        </div>
    )
}

