import React from 'react'
import Card from '../../forAgents/Card'

function PropertyArchway() {
  return (
    <section className="flex items-center justify-center   md:p-8  md:pt-12 relative m-auto w-full max-w-[1265px] p-4">
    <div className="flex flex-col items-center ">
    <h1 className="font-semibold text-4xl pt-3 text-center ">
    Property to rent in Archway
      </h1>
      <p className='text-slate-500 text-lg font-semibold pt-4 pb-4'>Our latest properties for rent.
      </p>
   
     <div className="flex  pt-5 gap-5 rounded-lg pb-20 md:flex-row flex-col">

     <Card imgSrc="./assets/pic1.jpeg"
     available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>

      <Card imgSrc="./assets/pic2.jpeg"
     available=" " furnished={true} location="Highgate Hill, N19" size="517" beds="1" price="1000"/>

      <Card imgSrc="./assets/pic3.jpg"
     available=" " furnished={true} location="Highgate Hill, N19" size="492" beds="1" price="1000"/>

     </div>
      </div>
  </section>
  )
}

export default PropertyArchway


