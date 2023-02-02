import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//to sign in we need an auth provider "google.com", using method signInWithGoogleAuth
//! it's in firebase/auth
// sign in can be with popup or redirect to page
//invoke google provider
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//_________ 1 - sign in with popUp__________
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// ________ 2 - Firesore/db ______________
//-------- authorized users(have control on firebase app) must be seprated from db users
//thats way every user sign in should be saved in db
// ! it's in firebase/firestore
const db = getFirestore();

// ________ 3 - Create User document /db ______________
// create users documents /take userAuth/ and apply afew methods : doc (to get refrence for the user document) , getDoc (take a user snap shot if exist  - if not then create new one )

export const createUserDocumentFromAuth = async (
  userAuth,
  addionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  //if user doen's exist then create one
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addionalInformation,
      });
    } catch (error) {
      console.log("error createing the user", error);
    }
  }
  return userDocRef;
};

// ________ 4 - Create User with email and password ______________

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
// ________ 5 - Sign in User with email and password ______________

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
