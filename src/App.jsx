import LatestCommission from "./forAgents/LatestCommission"
import LettingProtect from "./forAgents/LettingProtect"
import NewListing from "./forAgents/NewListing"
import NewStock from "./foragents/NewStock"
import SimplerSales from "./forSellers/SimplerSales"
// import SellYourStock from "./forAgents/SellYourStock"
import Footer from "./homepage/Footer"
import Front from "./homepage/Front"
import Page2 from "./homepage/Page2"
import Page3 from "./homepage/Page3"
import Page4 from "./homepage/Page4"
import Page5 from "./homepage/Page5"
import Navbar from "./navbar/Navbar"
import RentoProperty from "./searchProperties/RentProperty/RentoProperty"
import SaletoProperty from "./searchProperties/saleProperty/SaletoProperty"




function App() {
 
  return (
    <>


     <Navbar/>
     {/* <NewStock/> */}
     {/* <SimplerSales/> */}
     {/* <RentoProperty/>
     */}
     <SaletoProperty/>
     <Footer/>

    </>
  )
}

export default App
