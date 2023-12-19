import React from "react";
import { useContext, useState } from "react";
import { createContext } from "react";

const BlogContext = createContext();

const Context = ({ children }) => {//this one is used to wrap a component
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <BlogContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </BlogContext.Provider>
  );
};

export default Context;

export const Blog = () => {// this one is used to manipulate a context
    return(
        useContext(BlogContext)
    )
};
