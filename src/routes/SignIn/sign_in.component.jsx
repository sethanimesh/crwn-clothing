import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const uesrDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Please</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
        </div>
    )
  }

export default SignIn; 