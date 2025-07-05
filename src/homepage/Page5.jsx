import React from 'react'
import { Link } from 'react-router-dom'

function Page5() {
  return (
    <section className='flex items-center justify-center p-8 pt-12'>
      <div className="flex flex-col items-center ">
        <h1 className='font-semibold  text-center text-4xl pb-5 pt-3 max-w-[22ch]'>Our most popular neighbourhoods to rent</h1>
        <div className='flex   md:flex-row flex-col pt-5 gap-9 rounded-lg pb-4 '>
            <div className='flex flex-col items-start '>
                <Link to='/rent/delhi' className=" text-slate-600 hover:underline">Flats to rent in Delhi</Link>
                <Link  to='/rent/noida' className=" text-slate-600 hover:underline">Flats to rent in Noida</Link>
                <Link to='/rent/gaziabad' className=" text-slate-600 hover:underline">Flats to rent in Gaziabad</Link>
            </div>
            <div className='flex flex-col items-start'>
                 <Link to='/rent/hariyana' className=" text-slate-600 hover:underline">Flats to rent in Hariyana</Link>
                 <Link to='/rent/gurugram' className=" text-slate-600 hover:underline">Flats to rent in Gurugram</Link>
                 <Link  to='/rent/chandigarh' className=" text-slate-600 hover:underline">Flats to rent in Chandigarh</Link>
            </div>
            <div className='flex flex-col items-start'>
                <Link to='/rent/ludhiyana' className=" text-slate-600 hover:underline">Flats to rent in Ludhiyana</Link>
                <Link to='/rent/rishikesh' className=" text-slate-600 hover:underline">Flats to rent in Rishikesh</Link>
                <Link to='/rent/ambala' className=" text-slate-600 hover:underline">Flats to rent in Ambala</Link>
            </div>
            <div className='flex flex-col items-start'>
                <Link  to='/rent/nagpur' className=" text-slate-600 hover:underline">Flats to rent in Nagpur</Link>
                <Link to='/rent/indaur' className=" text-slate-600 hover:underline">Flats to rent in Indaur</Link>
                <Link  to='/rent/ujjain' className=" text-slate-600 hover:underline">Flats to rent in Ujjain</Link>
            </div>
            <div className='flex flex-col items-start'>
                <Link to='/rent/nanital' className=" text-slate-600 hover:underline">Flats to rent in Nanital</Link>
                <Link to='/rent/lucknow' className=" text-slate-600 hover:underline">Flats to rent in Lucknow</Link>
                <Link to='/rent/kanpur' className=" text-slate-600 hover:underline">Flats to rent in Kanpur</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Page5
