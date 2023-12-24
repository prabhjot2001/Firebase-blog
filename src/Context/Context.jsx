import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";
import { authentication } from "../fireBase/firebase";
import Loading from "../components/loading/Loading";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../fireBase/firebase";

const BlogContext = createContext();

const Context = ({ children }) => {//this one is used to wrap a component
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true)
  const [allUsers, setAllusers] = useState([])
  const [userLoading , setUserLoading] = useState(true)

  //*************** updating the user so that after authentication we can go to the   */
  useEffect(()=>{
    setTimeout(()=>{
      const unsubscribe = onAuthStateChanged(authentication, (user)=>{
        if(user) {
          setCurrentUser(user)
        }
        else{
          setCurrentUser(null)
        }
        setLoading(false)
      })
      return () => unsubscribe();
    },1000)
    
  },[currentUser]);

  //***************fetch all the data from the firebase******************
  useEffect(()=>{
    const getUser = () =>{
      const postRef = query(collection(db, "users"));
      onSnapshot(postRef,(snapshot) => {
        setAllusers(
          snapshot.docs.map((doc,i)=>({
            ...doc.data(),
            id : doc.id
          }))
        )
        setUserLoading(false)
      } )
    };
    getUser(); // explicitly calling getUser function 
  },[])
  // console.log(allUsers)
  //

  return (
    <BlogContext.Provider value={{ currentUser, setCurrentUser, setAllusers, allUsers, userLoading}}>
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
