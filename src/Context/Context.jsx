import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";
import { authentication } from "../fireBase/firebase";
import Loading from "../components/loading/Loading";

const BlogContext = createContext();

const Context = ({ children }) => {//this one is used to wrap a component
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true)

  //*************** updating the user so that after authentication we can go to the   */
  useEffect(()=>{
    setTimeout(()=>{
      const unsubscribe = onAuthStateChanged(authentication, (user)=>{
        if(user) {
          setCurrentUser(user)
        }else{
          setCurrentUser(null)
        }
        setLoading(false)
      })
      return () => unsubscribe();
    },)
    
  },[currentUser])

  return (
    <BlogContext.Provider value={{ currentUser, setCurrentUser }}>
      {loading? <Loading/> : children}
    </BlogContext.Provider>
  );
};

export default Context;

export const Blog = () => {// this one is used to manipulate a context
    return(
        useContext(BlogContext)
    )
};
