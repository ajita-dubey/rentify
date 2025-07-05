import React from 'react'
import AsideNavbar from './asideNavbar/AsideNavbar'
import AgentHomePage from './AgentHomePage'
import AdminToRent from './AdminToRent'
import AdminToSale from './AdminToSale'
import MyListing from './listing/MyListing'
import ListingEmails from './listing/ListingEmails'
import AddListing from './listing/AddListing'
import Offers from './Offers'
import Team from './Team'
import Viewings from './Viewings'
import { Outlet } from 'react-router-dom'

function AdminHomePage() {
  return (
    <div className='flex  gap-x-5 md:flex-row flex-col '>
        
        <AsideNavbar/>
        <Outlet/>
        {/* <AgentHomePage/> */}
        {/* <AdminToRent/> */}
        {/* <AdminToSale/> */}
        {/* <MyListing/> */}
        {/* <ListingEmails/> */}
        {/* <AddListing/> */}
        {/* <Viewings/> */}
        {/* <Offers/>
      */}
      {/* <Team/>
     */}
      
    </div>
  )
}

export default AdminHomePage


