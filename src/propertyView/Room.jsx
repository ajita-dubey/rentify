import React from 'react'
import { Element } from 'react-scroll'

function Room() {
  return (
    <div  className='mt-5'>
      <div>
        <h3 className="font-bold text-3xl text-center mb-8">
          Rooms
        </h3>
        <div className="mt-10 w-full">
          <div className=" flex md:flex-row flex-col justify-center items-center gap-4 ">
            <div className='aspect-video w-full'>
            <img src='https://assets.scraye.com/photos/original-1024/67bcd1c967d6b213bd4c6b19_584ea1a4b06e6e6b693e0089b6abc7246bf3bb4ae5326e97f16757496739b04c.jpg' 
           className='w-full h-full rounded-xl'/>
            </div>
            <div className='aspect-video w-full'>
            <img src='https://assets.scraye.com/photos/original-1024/67bcd1c967d6b213bd4c6b19_4a9d1d69cf661b04a8bc54d100d4fe3acad2823b6db07d7c9f16b357b0111b3f.jpg'
            className='w-full h-full rounded-xl'/>
            </div>
            <div className='aspect-video w-full'>
            <img src='https://assets.scraye.com/photos/original-1024/67bcd1c967d6b213bd4c6b19_4d9c1b9ac473307b412aa4cfb27fce5f5a0c0ffbd07dce12d0ec63f3d7958261.jpg'
            className='w-full h-full rounded-xl'/>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Room
