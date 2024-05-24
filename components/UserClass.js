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
        const dataM = await fetch("https://api.github.com/users/kr-mritunjay");
        const jsonP = await dataP.json();
        const jsonM = await dataM.json();

        this.setState({
            userInfoP : jsonP,
            userInfoM : jsonM
        });
    }
    render(){
        const {login, avatar_url} = this.state.userInfoP;
        return (
            <div className="user-card-container flex justify-center items-center">
                <div className="user-card w-1/6 rounded-2xl shadow-2xl m-4 p-4 flex flex-col justify-center items-center">
                    <div >
                        <img className="user-card-img rounded-full" src={this.state.userInfoM.avatar_url}></img>
                    </div>
                    <p className="font-bold text-gray-600 ">{this.state.userInfoM.login}</p>
                </div>
                <div className="user-card w-1/6 rounded-2xl shadow-2xl m-4 p-4 flex flex-col justify-center items-center">
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