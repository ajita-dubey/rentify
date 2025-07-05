import React, { useState } from 'react'
import LocationSearch from './LocationSearch'
import DistanceSearch from './DistanceSearch'
import PriceRange from './PriceRange'
import BedRoom from './BedRoom'
import BathRoom from './BathRoom'

function PropertySearchBar() {
  const [filters, setFilters] = useState({
    location: "",
    distance: "0km",
    bedroomMin: "Min",
    bedroomMax: "Max",
    bathroomMin: "Min",
    bathroomMax: "Max",
    priceMin: "",
    priceMax: "",
  });
  // console.log(filters);
  return (
      <section
    className="flex justify-between font-outfit pb-0 md:py-6 py-2 md:px-10  px-3 w-full" >
    <div className="flex gap-x-7 w-full">
       <div className=" flex gap-x-2 w-full">
        <LocationSearch  filters={filters} setFilters={setFilters}/>
        <div className="gap-x-2 w-full hidden md:flex">
        <DistanceSearch filters={filters} setFilters={setFilters}/>
        <PriceRange filters={filters} setFilters={setFilters}/>
        <BedRoom filters={filters} setFilters={setFilters}/>
        <BathRoom filters={filters} setFilters={setFilters}/>
        </div>
        </div>
    </div>
  </section>
  )
}

export default PropertySearchBar
