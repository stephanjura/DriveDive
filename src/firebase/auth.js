import { auth } from "./firebaseConfig";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification
} from "firebase/auth";

// Sign in using email and password
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign in using Google authentication
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

// Sign out the current user
export const doSignOut = () => {
  return signOut(auth);
};
/*
// Send password reset email
export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// Change the password for the current user
export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

// Send email verification to the current user
export const doSendEmailVerification = () => {
  const actionCodeSettings = {
    url: `${window.location.origin}/home` // Adjust the redirect URL as necessary
  };
  return sendEmailVerification(auth.currentUser, actionCodeSettings);
};
*/