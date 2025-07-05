import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Front from "./homepage/Front";
import RentoProperty from "./searchProperties/rentProperty/RentoProperty";
import SaletoProperty from "./searchProperties/saleProperty/SaletoProperty";
import Navbar from "./navbar/Navbar";
import Footer from "./homepage/Footer";
import SeamlessLetting from "./forLandlord/lettings/SeamlessLetting";
import GetRent from "./forLandlord/advancedRent/GetRent";
import SimplerSales from "./forSellers/SimplerSales";
import Spending from "./tenantService/depositFreeRenting/Spending";
import RentWithoutGaurantor from "./tenantService/rentGuarantor/RentWithoutGaurantor";
import LandlordToRentify from "./tenantService/referYourLandlord/LandlordToRentify";
import NewStock from "./forAgents/NewStock";
import UserLayout from "./UserLayout";
import AdminHomePage from "./admin/AdminHomePage";
import AgentHomePage from "./admin/AgentHomePage";
import AdminToSale from "./admin/AdminToSale";
import AdminToRent from "./admin/AdminToRent";
import MyListing from "./admin/listing/MyListing";
import AddListing from "./admin/listing/AddListing";
import ListingEmails from "./admin/listing/ListingEmails";
import Viewings from "./admin/Viewings";
import Offers from "./admin/Offers";
import Team from "./admin/Team";
import SingnIn from "./auth/SingnIn";
import SignUp from "./auth/SignUp";
import PropertyView from './propertyView/PropertyView'
import AboutArchway from "./forLandlord/lettingInArchway/AboutArchway";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/signin" element={<SingnIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

         <Route path="/" element={<UserLayout />}>
       
          <Route path="home" element={<Front />} />
          <Route path="rent/:cityname" element={<RentoProperty />} />
          <Route path="sale/:cityname" element={<SaletoProperty />} />
          <Route path="lettings" element={<SeamlessLetting />} />
          <Route path="lettings/:cityname" element={<AboutArchway/>} />

          <Route path="advanced-rent" element={<GetRent />} />
          <Route path="for-sellers" element={<SimplerSales />} />
          <Route path="deposit-free-renting" element={<Spending />} />
          <Route path="rent-guarantor" element={<RentWithoutGaurantor />} />
          <Route path="refer-landlord" element={<LandlordToRentify />} />
          <Route path="for-agents" element={<NewStock />} />
          <Route path="property/:id" element={<PropertyView/>} />
          </Route>
          <Route path="/admin" element={<AdminHomePage />}>
          <Route path="home" element={<AgentHomePage />} />
          <Route path="sale" element={<AdminToSale />} />
          <Route path="rent" element={<AdminToRent/>} />
          <Route path="listings" element={<MyListing />} />
          <Route path="listings/add" element={<AddListing />} />
          <Route path="listings/subscription" element={<ListingEmails />} />
          <Route path="viewings" element={<Viewings/>} />
          <Route path="offers" element={<Offers/>} />
          <Route path="team" element={<Team/>} />
         </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
