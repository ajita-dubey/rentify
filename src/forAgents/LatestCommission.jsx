import React from 'react'
import Card from './Card'


function LatestCommission() {
  return (

    <section className="flex items-center justify-center p-8 pt-12">
          <div className="flex flex-col items-center ">
          <h1 className="font-semibold text-5xl pt-3 ">
             Latest commision opportunities
            </h1>
           <div className="flex  pt-5 gap-5 rounded-lg pb-3">
           <button className=" border border-gray-400 rounded-md text-lg p-2 px-3 outline-none">Sales </button>
           <button className= "bg-gray-200  rounded-md text-lg p-2 px-3 outline-none">Rentals</button>
           </div>
           <div className="flex  pt-5 gap-5 rounded-lg pb-20">

           <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>

            <Card imgSrc="src/assets/pic2.jpeg"
           available=" " furnished={true} location="Highgate Hill, N19" size="517" beds="1" price="1000"/>

            <Card imgSrc="src/assets/pic3.jpg"
           available=" " furnished={true} location="Highgate Hill, N19" size="492" beds="1" price="1000"/>

           </div>
            </div>
        </section>
  )
}

export default LatestCommission
