import UserClass from "./UserClass";
const About = () => {
    return (
        <div className=" m-10 p-10 flex flex-col justify-center items-center">
            <h1 className="font-bold pt-10">GITHUB PROFILE</h1>
            {/* <User name="Priyanshu" contact="priyanshu@gmail.com" address="bengaluru"/> */}
            <UserClass name="Samiksha" contact="Samiksha@gmail.com" address="bengaluru"/>
        </div>
    )
}

export default About;   