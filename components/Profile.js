import UserContext from "./utils/UserContext";
import { useContext,useState } from "react";
const Profile = () => {
    const {LoggedInUser, setUserName} = useContext(UserContext);
    // console.log(LoggedInUser);
    const [tempVar, setTempVar] = useState("");
    return (
        <div className="w-full pt-20 flex items-center justify-center flex-col">
            <div className="flex w-full justify-center">
                <div className="w-1/5 flex flex-col items-center bg-gray rounded-xl shadow-2xl p-4 m-4">
                <div className="w-full flex justify-center items-center">
                        <img src="https://assets.leetcode.com/users/avatars/avatar_1673150519.png"></img>
                    </div> 
                    <span className="font-extrabold text-gray-600">
                        {LoggedInUser}
                    </span>
                </div>
            </div>
            <div>
                <span class="font-extrabold text-gray-600 m-4 p-4">Change Your Profile Name</span>
                <input type="text"
                value = {tempVar}
                placeholder=""
                className="search-bar shadow appearance-none border rounded w-100  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => {
                    setTempVar(e.target.value)
                }}>
                </input>
                <button className="ml-4 mr-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setUserName(tempVar)}>
                    Change
                </button>
            </div>
        </div>
    )
}

export default Profile;