/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import Loader from "../Components/Shared/Loader";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("user:", user);

  // provider
  const googProvider = new GoogleAuthProvider();
  // provider

  const loginWithGooogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googProvider).finally(() => {
      return setLoading(false);
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => {
      setLoading(false);
    });
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
    loginWithGooogle,
    logOut,
    loading,
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
