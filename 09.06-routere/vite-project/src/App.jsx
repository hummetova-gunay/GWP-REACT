import { useState } from 'react'

import './App.css'
import Header from './assets/Header'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Footer from './assets/Footer'

function App() {

  return (
    <>
    <div className='App'>
          <Header/>
          <Outlet />
          {/* <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes> */}
          <Footer/>
    </div>
    </>
  )
}

export default App
