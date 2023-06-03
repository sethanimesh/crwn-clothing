import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyCxauffF-LrYGswvfCNK3ioJ8M4ZnP59wY",
    authDomain: "crwn-clothing-db-sethanimesh.firebaseapp.com",
    projectId: "crwn-clothing-db-sethanimesh",
    storageBucket: "crwn-clothing-db-sethanimesh.appspot.com",
    messagingSenderId: "29180500617",
    appId: "1:29180500617:web:9a1b5d76334bdfdf1a8458"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists()); //whether or not if it exist in the database or not

  if (!userSnapshot.exists())
  {
    //if user data does not exist
    //create / set the document with the data from userAuth in my collection
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email, 
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  
    //if user data exists
    //return userDocRef
  
  return userDocRef;
}