import { createContext, useState } from "react";

// as the actual value you want to access 
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// Provider is component that will wrap around any other components that 
//  need access to the values inside
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}