import React from 'react'
import Card from '../forAgents/Card'
import { RiSkipLeftLine, RiSkipRightLine } from 'react-icons/ri'
import { MdOutlineNavigateNext } from 'react-icons/md'
import Sorting from '../searchProperties/Sorting'
import Order from '../searchProperties/saleProperty/Order'
import PropertySearchBar from '../searchProperties/PropertySearchBar'

function AdminToSale() {
  return (
    <>
    <PropertySearchBar/>
      <section className="flex items-center justify-center md:p-8  p-2 ">
    <div className="flex flex-col ">
      <div className=" flex  justify-between  items-center py-3 md:py-0">
        <p className="font-bold md:text-lg  ">1241 results in India </p>
        <div className="flex gap-x-2">
        <Sorting/>
        <Order/>
        </div>
       </div>
      <div className="flex  md:flex-row flex-col pt-2 gap-5">
        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
          isVerified={true} commission = "5"
        />
        <Card
          imgSrc="src/assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="src/assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
      </div>
      <div className="flex md:flex-row flex-col pt-2 gap-5">
        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
        <Card
          imgSrc="src/assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="src/assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
      </div>

      <div className="flex md:flex-row flex-col pt-2 gap-5">
        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
        <Card
          imgSrc="src/assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="src/assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
      </div>

      <div className="flex md:flex-row flex-col pt-2 gap-5">
        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />

        <Card
          imgSrc="src/assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="src/assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
      </div>

      <div className="flex md:flex-row flex-col pt-2 gap-5">
        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />

        <Card
          imgSrc="src/assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="src/assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
      </div>

      <div className="flex md:flex-row flex-col pt-2 gap-5">
        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />

        <Card
          imgSrc="src/assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="src/assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="src/assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
      </div>
      <div className="flex justify-center items-center gap-x-2 mt-4">
        <div className=" flex justify-center items-center p-2 bg-gray-300 rounded-full">
          <RiSkipLeftLine size={30} />
        </div>
        <div className=" flex justify-center items-center p-2 bg-gray-300 rounded-full">
          <MdOutlineNavigateNext size={30} />
        </div>
        <div className=" flex justify-center items-center p-2 bg-gray-300 rounded-full">
          <MdOutlineNavigateNext size={30} />
        </div>
        <div className=" flex justify-center items-center p-2 bg-gray-300 rounded-full">
          <RiSkipRightLine size={30} />
        </div>
      </div>
    </div>
  </section>
    </>
  
  )
}

export default AdminToSale
