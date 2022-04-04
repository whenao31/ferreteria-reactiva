import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/credentials";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth ");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider()
    return signInWithPopup(auth, githubProvider)
  }

  return (
    <authContext.Provider value={{ user, logout, loading, loginWithGoogle, loginWithGitHub }}>
      {children}
    </authContext.Provider>
  );
};