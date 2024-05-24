import { createContext } from "react";

const UserContext = createContext({
    LoggedInUser : "Default Value"
})

export default UserContext;
