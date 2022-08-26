import { 
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const { userDocRef } = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication;