import RestaurantCard, {ResCardWithPromotedLabel} from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { RES_LIST_URL } from "./utils/constants";
import React from "react";
const Body = () => {
    const CORS_PROXY_URL = 'https://thingproxy.freeboard.io/fetch/';
    let [restaurantList, setRestaurantList] = useState(null);
    const [loginbtn, setloginbtn] = useState("Login");
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch( CORS_PROXY_URL+ RES_LIST_URL);
        // console.log(data)
        const json = await data.json();
        console.log(json)
        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const PromotedRestaurant = ResCardWithPromotedLabel(RestaurantCard);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false){
        return (
            <h1>It looks like you are Offline</h1>
        )
    }
    if(restaurantList === null) return <Shimmer/>;
    return (
        <div className="res-container pt-20">
            <div className=" m-4 flex justify-center p-4 w-full bg-white">
                <input 
                type="text"
                data-testid = "search-box"
                className="search-bar shadow appearance-none border rounded w-100  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Search for restaurants"
                value={searchText}
                onChange={
                    (e) => {
                        setSearchText(e.target.value);
                        // const filteredRestaurant = restaurantList.filter(
                        //     (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        // )
                        // setfilteredRestaurant(filteredRestaurant);
                    }
                }
                />
                <button  
                className=" ml-4 mr-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick = {
                    () => {
                        const filteredRestaurant = restaurantList && restaurantList.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfilteredRestaurant(filteredRestaurant);
                    }
                }
                >Search</button>

                <button 
                className="topRated mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                onClick={ () => {
                    const filteredList = restaurantList && restaurantList.filter( (res) => res.info.avgRating >4.4)
                    // restaurantList = setRestaurantList(filteredList);
                    setfilteredRestaurant(filteredList);
                }}>top rated restaurants</button>

                <button className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick = { () => {
                    loginbtn === "Login" ? setloginbtn("Logout") : setloginbtn("Login");
                }}> {loginbtn} </button>
            </div>
            <div className="flex flex-wrap justify-evenly">
                {
                    filteredRestaurant && filteredRestaurant.map((restaurant) => 
                    <Link className="cardLink" key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {
                           restaurant.info.isOpen ? (<PromotedRestaurant resdata = {restaurant}/>) : (<RestaurantCard resdata= {restaurant}/>) 
                        }
                    </Link>
                    )
                    
                }
            </div>
        </div>
    );
}

export default Body;