import React from 'react'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './pages/core/Home'
import Register from './pages/user/Register'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<h2>Dashboard</h2>}/>
          <Route path='/home' element={<Home/> }/>
          <Route path='/login' element={<Home/> }/>
          <Route path='/register' element={<Register/> }/>
        </Routes>
      </Router>

        
      
    </>
  )
}

export default App