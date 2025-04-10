import React from 'react'
import Faq from '../faq/Faq'

function ForSellersFaq() {
  return (
    <section className="flex items-center justify-center p-4 md:p-8  md:pt-12 ">
    <div className='max-w-[1265px]'>
        <h1 className='font-semibold text-4xl pt-3 pb-4 text-center'>FAQs</h1>
        <div className=' w-full'>
             <Faq question="How do fees work?" answer="Rentify’s fee for selling a property is 2% + VAT of the purchase price. This only becomes chargeable upon completion."/>

            <Faq question="How does your partner agent network work?" answer="We believe properties sell faster by collaborating with other agents. As a result, we’ve built a large and growing network of partner agents who can earn a commission share from us when introducing a buyer to purchase a property. The commission share comes out of our 2.0% + VAT fee and does not create additional costs for the seller."/> 

        </div>
    </div>
  
</section>
  )
}

export default ForSellersFaq
