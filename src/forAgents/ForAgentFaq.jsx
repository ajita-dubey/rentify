import React from 'react'
import Faq from '../faq/Faq'

function ForAgentFaq() {
  return (
    <section className="flex items-center justify-center p-4 md:p-8  md:pt-12 ">
    <div className='max-w-[1265px]'>
        <h1 className='font-semibold text-4xl pt-3 pb-4 text-center'>FAQs</h1>
        <div className=' w-full'>
             <Faq question="What are the commissions agents can earn?" answer="Agents can earn a commission on any listed property. You'll receive tools to easily share these listings with your tenants, book viewings and make offers on their behalf."/>

            <Faq question="Terms and Conditions" answer="You can read our full terms and conditions for agents"/> 

           
        </div>
    </div>
  
</section>
  )
}

export default ForAgentFaq
