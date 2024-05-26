import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfoP : {
                name : "priyanshu",
                location : "dummy",
                avatar_url: "",
            },
            userInfoM : {
                name : "priyanshu",
                location : "dummy",
                avatar_url: "",
            }
        }
    }
    async componentDidMount(){
        const dataP = await fetch("https://api.github.com/users/priyanshu2400");
        const jsonP = await dataP.json();

        this.setState({
            userInfoP : jsonP,
        });
    }
    render(){
        const {login, avatar_url} = this.state.userInfoP;
        return (
            <div className="user-card-container flex justify-center items-center p-10">
                <div className="user-card w-1/2 rounded-2xl shadow-2xl m-4 p-4 flex flex-col justify-center items-center">
                    <div >
                        <img className="user-card-img rounded-full" src={avatar_url}></img>
                    </div>
                    <p className="font-bold text-gray-600">{login}</p>
                </div>
            </div>
        );
    }
}

export default UserClass;