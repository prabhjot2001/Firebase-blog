import React, { createContext, useContext, useState } from 'react'

const themeContext  = createContext();

const Theme = ({children}) => {
  const [state, setState] = useState("light")
  
  return (
    <themeContext.Provider>
    {children}
    </themeContext.Provider>
  )
}

export default Theme
const theme = () =>{
  return (
    useContext(themeContext)
  )
}