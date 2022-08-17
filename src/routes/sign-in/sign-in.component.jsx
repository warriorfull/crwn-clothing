import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';

import { 
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

const SignIn = () => {
    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            console.log(response);
        }
        fetchData();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const { userDocRef } = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>Sign IN Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button>
        </div>
    );
}

export default SignIn;