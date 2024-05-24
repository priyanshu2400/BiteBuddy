import ItemsList from "./ItemsList";
import { useSelector } from "react-redux";
import Payment from "./Payment";
import PaymentSuccessfull from "./PaymentSuccessfull";
const Cart = () => {
    const cart = useSelector((store) => store.cart.items)
    if(cart.length === 0){
        return <PaymentSuccessfull/>;
    }
    return (
        <div className="pt-20 w-full flex flex-col justify-evenly items-center"> 
            <div className="w-1/2 shadow-xl mb-20">
                <ItemsList items={cart}/>
            </div>
            <div className="fixed bottom-0 w-1/2 flex justify-center">
                <Payment items ={cart}/>
            </div>
        </div>
    )
}
export default Cart;