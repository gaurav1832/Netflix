import {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setuser] = useState({});

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    return signOut(auth);
  }

  useEffect(() => {
    //unsubscribe
    const unsb = onAuthStateChanged(auth, (currUser) => {
      setuser(currUser);
    });
    return () => {
      unsb();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signup, signin, signout, user }}>
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
