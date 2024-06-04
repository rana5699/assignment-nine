/* eslint-disable react/prop-types */
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("user:", user);

  // provider
  const googProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  // provider

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };

  // login with email and password
  const loginWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };

  // set Profile info
  const updateProfileInfo = (user, profile) => {
    setLoading(true);
    return updateProfile(user, profile).finally(() => {
      setLoading(false);
    });
  };

  // login with google
  const loginWithGooogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googProvider).finally(() => {
      return setLoading(false);
    });
  };

  // login with facebokk
  const loginWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider).finally(() => {
      return setLoading(false);
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginWithEmailPassword,
    updateProfileInfo,
    loginWithGooogle,
    loginWithFacebook,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
