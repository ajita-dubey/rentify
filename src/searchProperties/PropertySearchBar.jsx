import React from 'react'
import LocationSearch from './LocationSearch'
import DistanceSearch from './DistanceSearch'
import PriceRange from './PriceRange'
import BedRoom from './BedRoom'
import BathRoom from './BathRoom'

function PropertySearchBar() {
  return (
      <section
    className="flex justify-between font-outfit pb-0 md:py-6 py-2 md:px-10  px-3 w-full " >
    <div className="flex gap-x-7 w-full">
       <div className=" flex gap-x-2 w-full">
        <LocationSearch/>
        <div className="gap-x-2 w-full hidden md:flex">
        <DistanceSearch/>
        <PriceRange/>
        <BedRoom/>
        <BathRoom/>
        </div>
        </div>
    </div>
  </section>
  )
}

export default PropertySearchBar
