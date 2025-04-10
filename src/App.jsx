import AccountSetUp from "./admin/AccountSetUp"
import AdminToRent from "./admin/AdminToRent"
import AdminToSale from "./admin/AdminToSale"
import AgencySetup from "./admin/AgencySetup"
import AgentHomePage from "./admin/AgentHomePage"
import GettingStarted from "./admin/GettingStarted"
import AddListing from "./admin/listing/AddListing"
import ListingEmails from "./admin/listing/ListingEmails"
import MyListing from "./admin/listing/MyListing"
import Offers from "./admin/Offers"
import SignIn from "./admin/SignIn"
import Team from "./admin/Team"
import Viewings from "./admin/Viewings"
import LatestCommission from "./forAgents/LatestCommission"
import LettingProtect from "./forAgents/LettingProtect"
import NewListing from "./forAgents/NewListing"
import NewStock from "./foragents/NewStock"
import GetRent from "./forLandlord/advancedRent/GetRent"
import SeamlessLetting from "./forLandlord/lettings/SeamlessLetting"
// import SeamlessLetting from "./forLandlord/advancedRent/SeamlessLetting"
import SimplerSales from "./forSellers/SimplerSales"
// import SellYourStock from "./forAgents/SellYourStock"
import Footer from "./homepage/Footer"
import Front from "./homepage/Front"
import Page2 from "./homepage/Page2"
import Page3 from "./homepage/Page3"
import Page4 from "./homepage/Page4"
import Page5 from "./homepage/Page5"
import Navbar from "./navbar/Navbar"
import PropertyView from "./propertyView/PropertyView"
import RentoProperty from "./searchProperties/RentProperty/RentoProperty"
import SaletoProperty from "./searchProperties/saleProperty/SaletoProperty"
import Spending from "./tenantService/depositFreeRenting/Spending"
import LandlordToRentify from "./tenantService/referYourLandlord/LandlordToRentify"
import RentWithoutGaurantor from "./tenantService/rentGuarantor/RentWithoutGaurantor"
//  import RentWithoutGaurantor from "./tenantService/referYourLandlord/RentWithoutGaurantor"

function App() {
 
  return (
    <>
     <Navbar/>
     <Front/>
      {/* <NewStock/> */}
     {/* <SimplerSales/>  */}
     {/* <RentoProperty/>  */}
     {/* <SaletoProperty/> */}
     {/* <Spending/> */}
     {/* <RentWithoutGaurantor/> */}
     {/* <LandlordToRentify/> */}
     {/* <SeamlessLetting/> */}
     {/* <PropertyView/> */}
     {/* <GetRent/> */}
     <Footer/>
     {/* <SignIn/> */}
     {/* <GettingStarted/> */}
     {/* <AccountSetUp/> */}
     {/* <AgencySetup/> */}
     {/* <AgentHomePage/> */}
     {/* <AdminToRent/> */}
     {/* <AdminToSale/> */}
     {/* <MyListing/> */}
     {/* <AddListing/> */}
     {/* <ListingEmails/> */}
     {/* <Viewings/> */}
     {/* <Offers/> */}
     {/* <Team/> */}


    </>
  )
}

export default App
