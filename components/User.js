import { useState } from "react";
const User = (props) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
            <p>{props.name}</p>
            <p>{props.address}</p>
            <p>{props.contact}</p>
            <p>count : {count}</p>
        </div>
    )
}

export default User;