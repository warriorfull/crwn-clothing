import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

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

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}