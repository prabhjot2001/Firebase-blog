import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import Demo from './components/Demo/Demo'
import NotFound from './components/NotFound/NotFound'
import HomeHeader from './components/Home/HomeHeader'
import DemoHeader from './components/Demo/DemoHeader'
import { Blog } from './Context/Context'

function App() {
  const {currentUser} = Blog();
  return (
    <>
    {currentUser ? <HomeHeader/> : <DemoHeader/>}
      <Routes>
         {currentUser && <Route path='/' element={<Home/>}/>}
         {!currentUser &&  <Route path='/demo' element={<Demo/>}/>}
         <Route path='*' element={<Navigate to={!currentUser? "/demo" : "/"}/>}/>
        //  <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
