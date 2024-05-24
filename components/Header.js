import  LOGO_URL  from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useContext} from "react";
import { useSelector } from "react-redux";
import React from "react";
const Header = () => {
    const {LoggedInUser} = useContext(UserContext);
    const cart = useSelector( (store) => store.cart.items);
    return (
        <div className = "fixed top-0 w-full z-20  mb-1 flex justify-between items-center bg-white shadow-lg font-bold">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL}/>
            </div>
            <div className="flex">
                <ul className="flex">
                    <li className="px-4">{ useOnlineStatus() == true ? "🟢" : "🔴"}</li>
                    <li className="px-4 text-gray-600 hover:text-black"><Link to="/">Home</Link></li>
                    <li className="px-4 text-gray-600 hover:text-black"><Link to="/about">About us</Link></li>
                    <li className="px-4 text-gray-600 hover:text-black"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4 text-gray-600 hover:text-black"><Link to="/contact">contact Us</Link></li>
                    <li className="px-4 text-gray-600 hover:text-black"><Link to="/cart">Cart ({cart.length})</Link></li>
                    <li className="px-4 text-gray-600 hover:text-black"><Link to="/profile">{LoggedInUser}</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;