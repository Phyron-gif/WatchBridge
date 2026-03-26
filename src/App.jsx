
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SafetyMap from './pages/SafetyMap'

import Report from './pages/Report'

import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import { useState } from 'react'
import { AuthContext } from './AuthContext'
import Opportunities from './pages/Opportunities'
import Footer from './components/Footer'

function App() {
  const [user, setUser] = useState({
    name:'',
    email:''
  })
  function login(){
    setUser('')

  }
  function logout(){
    setUser('')
  }
  

  return (
    <>
  
    <Navbar/>
    <AuthContext.Provider value={{user,setUser}}>
       <Routes>
        <Route  path='/' element={<Home/>}></Route>
         <Route  path='/safety' element={<SafetyMap/>}>About</Route>
          <Route  path='/opportunities' element={<Opportunities/>}>Opportunities</Route>
          <Route path='/login' element={<Login/>}>Login</Route>
          <Route path='/report' element={<Report/>}>Report</Route>
          <Route path='*' element={<p>404 NOT FOUND</p>}></Route>
          
      </Routes>
    </AuthContext.Provider>
    <Footer/>
      
    
     


  
      
    </>
  )
}

export default App
