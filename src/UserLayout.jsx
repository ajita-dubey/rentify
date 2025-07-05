import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './homepage/Footer'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default UserLayout
