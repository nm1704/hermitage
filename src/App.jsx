import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
//import Hero from './components/Hero'
import Home from './pages/Home'
//import PropertyList from './components/PropertyList'
import Footer from './components/Footer'
//import {properties}  from './data/properties'
//import PropertyCard from './components/PropertyCard'
//import SectionHeading from './components/SectionHeading'
//import { useState } from 'react'
//import Filters from './components/Filters'
//import AddPropertyForm from './components/AddPropertyForm'
import PropertyDetail from './pages/PropertyDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoutes'
import ChatWidget from './components/Chatwidget'
function App() {
return (
      <div className="min-h-screen">
      <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/property/:id" element={<PropertyDetail/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/wishlist' element = {<ProtectedRoute><Wishlist/></ProtectedRoute>}
        />
        <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    <ChatWidget/>
    </div>
  )
  
}

export default App