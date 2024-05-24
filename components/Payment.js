import { useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";

const Payment = ({items}) => {
    let totalPrice = 0;
    items.map((item) => {
        let price = (item.card.info.price) ? (item.card.info.price) : (item.card.info.defaultPrice);
        totalPrice += (price/100);
    })
    const dispatch = useDispatch();
    const handleCLearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="w-full p-3 h-20 bg-white rounded shadow-md flex justify-evenly items-center">
            <span className="font-bold text-green-600">TO PAY</span>
            <span className="font-bold text-green-600">₹ {totalPrice.toFixed(2)}</span>
            <button className="bg-green-500 text-white font-bold hover:bg-green-300 p-2 rounded-sm"
            onClick={handleCLearCart}
                    >ORDER</button>
            <button className="bg-red-500 text-white font-bold hover:bg-red-300 p-2 rounded-sm"
                onClick={handleCLearCart}
                    >CLEAR CART</button>
        </div>
    )
}
export default Payment;