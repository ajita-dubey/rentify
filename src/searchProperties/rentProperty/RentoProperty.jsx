import React from 'react'
import MultipleImeges from './MultipleImeges'
import PropertySearchBar from '../PropertySearchBar'
import SearchTerms from './SearchTerms'

function RentoProperty() {
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
    <div className='-z-10'>
    <PropertySearchBar/>
  <MultipleImeges rooms={rooms}/>
  <SearchTerms/>
    </div>
  )
}

export default RentoProperty
