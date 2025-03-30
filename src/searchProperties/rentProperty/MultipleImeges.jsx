import React from 'react'
import Card from '../../forAgents/Card'
import { GrPrevious } from 'react-icons/gr'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { RiSkipLeftLine, RiSkipRightLine } from 'react-icons/ri'


function MultipleImeges() {
  return (
    <section className="flex items-center justify-center p-8 ">
          <div className="flex flex-col ">

          <div className=" flex  justify-between ">
          <p className="font-bold text-lg  ">
          1241 results in India </p>

       <input type="text" className=" rounded-lg p-2 border border-gray-400  "/>

        <input type="text"className=" rounded-lg p-2 border border-gray-400  "/>
        </div>
          
           <div className="flex  pt-2 gap-5 rounded-lg ">
          <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>
            <Card imgSrc="src/assets/pic2.jpeg"
           available=" " furnished={true} location="Highgate Hill, N19" size="517" beds="1" price="1000"/>
           <Card imgSrc="src/assets/pic3.jpg"
           available=" " furnished={true} location="Highgate Hill, N19" size="492" beds="1" price="1000"/>
           <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>
            </div>

           <div className="flex  pt-2 gap-5 rounded-lg ">
           <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>
          <Card imgSrc="src/assets/pic2.jpeg"
           available=" " furnished={true} location="Highgate Hill, N19" size="517" beds="1" price="1000"/>
          <Card imgSrc="src/assets/pic3.jpg"
           available=" " furnished={true} location="Highgate Hill, N19" size="492" beds="1" price="1000"/>
          <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>
         </div>

         <div className="flex  pt-2 gap-5 rounded-lg ">
           <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>
            <Card imgSrc="src/assets/pic2.jpeg"
           available=" " furnished={true} location="Highgate Hill, N19" size="517" beds="1" price="1000"/>
          <Card imgSrc="src/assets/pic3.jpg"
           available=" " furnished={true} location="Highgate Hill, N19" size="492" beds="1" price="1000"/>
        <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>
         </div>

        <div className="flex  pt-2 gap-5 rounded-lg ">
           <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>

            <Card imgSrc="src/assets/pic2.jpeg"
           available=" " furnished={true} location="Highgate Hill, N19" size="517" beds="1" price="1000"/>

            <Card imgSrc="src/assets/pic3.jpg"
           available=" " furnished={true} location="Highgate Hill, N19" size="492" beds="1" price="1000"/>

          <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>
         </div>


         <div className="flex  pt-2 gap-5 rounded-lg ">
           <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>

            <Card imgSrc="src/assets/pic2.jpeg"
           available=" " furnished={true} location="Highgate Hill, N19" size="517" beds="1" price="1000"/>

            <Card imgSrc="src/assets/pic3.jpg"
           available=" " furnished={true} location="Highgate Hill, N19" size="492" beds="1" price="1000"/>

          <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>
         </div>

         <div className="flex  pt-2 gap-5 rounded-lg ">
           <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>

            <Card imgSrc="src/assets/pic2.jpeg"
           available=" " furnished={true} location="Highgate Hill, N19" size="517" beds="1" price="1000"/>

            <Card imgSrc="src/assets/pic3.jpg"
           available=" " furnished={true} location="Highgate Hill, N19" size="492" beds="1" price="1000"/>

          <Card imgSrc="src/assets/pic1.jpeg"
           available=" " furnished={true} location="Royal Drive, N11" size="1325" beds="3" price="2000"/>
         </div>
         <div className='flex justify-center items-center gap-x-2 mt-4'>
          <div className=' flex justify-center items-center p-2 bg-gray-300 rounded-full'>
          <RiSkipLeftLine  size={30}/>
          </div>
          <div className=' flex justify-center items-center p-2 bg-gray-300 rounded-full'>
          <MdOutlineNavigateNext  size={30}/>
          </div>
          <div className=' flex justify-center items-center p-2 bg-gray-300 rounded-full'>
          <MdOutlineNavigateNext  size={30}/>
          </div>
          <div className=' flex justify-center items-center p-2 bg-gray-300 rounded-full'>
          <RiSkipRightLine  size={30}/>
          </div>
           
         </div>
 </div>

        </section>
  )
}

export default MultipleImeges
