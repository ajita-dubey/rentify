import React from 'react'
import Card from '../forAgents/Card'
import { RiSkipLeftLine, RiSkipRightLine } from 'react-icons/ri'
import { MdOutlineNavigateNext } from 'react-icons/md'
import Sorting from '../searchProperties/Sorting'
import Order from '../searchProperties/saleProperty/Order'
import PropertySearchBar from '../searchProperties/PropertySearchBar'
import MultipleImeges from '../searchProperties/rentProperty/MultipleImeges'

function AdminToSale() {
  const rooms=[
    {
      "id": 1,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": " ",
      "furnished": true,
      "location": "Royal Drive, N11",
      "size": 1325,
      "beds": 3,
      "price": 2000,
      "isVerified": true,
      "commission": 5
    },
    {
      "id": 2,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": "Ready to Move",
      "furnished": false,
      "location": "Green Park, S10",
      "size": 1100,
      "beds": 2,
      "price": 1800,
      "isVerified": true,
      "commission": 3
    },
    {
      "id": 3,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": "Available from May",
      "furnished": true,
      "location": "Lake View, B5",
      "size": 1450,
      "beds": 4,
      "price": 2500,
      "isVerified": false,
      "commission": 2
    },
    {
      "id": 4,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": "Immediate",
      "furnished": false,
      "location": "Sunshine Street, A2",
      "size": 950,
      "beds": 2,
      "price": 1500,
      "isVerified": true,
      "commission": 4
    },
    {
      "id": 5,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": " ",
      "furnished": true,
      "location": "Palm Grove, K9",
      "size": 1600,
      "beds": 3,
      "price": 2700,
      "isVerified": true,
      "commission": 6
    },
    {
      "id": 6,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": "Available in 2 weeks",
      "furnished": false,
      "location": "Ocean Drive, Z7",
      "size": 1200,
      "beds": 2,
      "price": 2100,
      "isVerified": false,
      "commission": 2
    },
    {
      "id": 7,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": "Ready to Move",
      "furnished": true,
      "location": "Sunset Avenue, V3",
      "size": 1750,
      "beds": 4,
      "price": 3000,
      "isVerified": true,
      "commission": 5
    },
    {
      "id": 8,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": "Available from June",
      "furnished": false,
      "location": "Maple Street, Y5",
      "size": 1000,
      "beds": 2,
      "price": 1700,
      "isVerified": true,
      "commission": 3
    },
    {
      "id": 9,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": "Immediate",
      "furnished": true,
      "location": "Rose Garden, M8",
      "size": 1400,
      "beds": 3,
      "price": 2200,
      "isVerified": false,
      "commission": 4
    },
    {
      "id": 10,
      "imgSrc": "https://assets.scraye.com/photos/card/68010df7f7b2f72e3afffa41_ec7a212f49b71a9b2abad229e8e350525dcca8cebc08a818f505e6265746a30c.jpg",
      "available": "Available next month",
      "furnished": false,
      "location": "Hilltop, T12",
      "size": 1350,
      "beds": 3,
      "price": 2000,
      "isVerified": true,
      "commission": 2
    }
  ]
  return (
    <div>
    <PropertySearchBar/>
    <MultipleImeges rooms={rooms}/>
      {/* <section className="flex items-center justify-center   p-2 pt-2 ">
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
          imgSrc="./assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
          isVerified={true} commission = "5"
        />
        <Card
          imgSrc="./assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="./assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="./assets/pic1.jpeg"
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
          imgSrc="./assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
        <Card
          imgSrc="./assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="./assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="./assets/pic1.jpeg"
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
          imgSrc="./assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />
        <Card
          imgSrc="./assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="./assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />
        <Card
          imgSrc="./assets/pic1.jpeg"
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
          imgSrc="./assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />

        <Card
          imgSrc="./assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="./assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="./assets/pic1.jpeg"
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
          imgSrc="./assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />

        <Card
          imgSrc="./assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="./assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="./assets/pic1.jpeg"
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
          imgSrc="./assets/pic1.jpeg"
          available=" "
          furnished={true}
          location="Royal Drive, N11"
          size="1325"
          beds="3"
          price="2000"
        />

        <Card
          imgSrc="./assets/pic2.jpeg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="517"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="./assets/pic3.jpg"
          available=" "
          furnished={true}
          location="Highgate Hill, N19"
          size="492"
          beds="1"
          price="1000"
        />

        <Card
          imgSrc="./assets/pic1.jpeg"
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
  </section> */}
    </div>
  
  )
}

export default AdminToSale
