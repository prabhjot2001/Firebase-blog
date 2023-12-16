import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Demo from './components/Demo/Demo'
import NotFound from './components/NotFound/NotFound'
import HomeHeader from './components/Home/HomeHeader'
import DemoHeader from './components/Demo/DemoHeader'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <>
    {auth ? <HomeHeader/> : <DemoHeader/>}
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/demo' element={<Demo/>}/>
         <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
