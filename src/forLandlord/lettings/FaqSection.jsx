import React from 'react'
import Faq from '../../faq/Faq'

function FaqSection() {
  return (
    <section className="flex items-center justify-center p-4 md:p-8  md:pt-12 ">
        <div className='max-w-[1265px]'>
            <h1 className='font-semibold text-4xl pt-3 pb-4 text-center'>FAQs</h1>
            <div className=' w-full'>
                 <Faq question="How do fees work?" answer="Our fees are transparent and success-based. Our fees apply once an offer is agreed, 
                 signed and paid. These are then deducted monthly from the rent so landlords
                  don’t have a large upfront bill to pay and our letting agents are incentivised to find the best fit for you."/>

                <Faq question="How do you  reference tenants?" answer="We thoroughly reference every tenant and share a full report with you to decide whether you’d like to proceed. The report typically covers ID, right-to-rent, credit checks, affordability and past rental references"/> 

                  <Faq question="Do you offer rent paid on time for every tenancy?" answer="Yes, subject to us conducting our proprietary referencing process and Scraye collecting the rent on behalf of the landlord. Rent collection is free and included within the service. If you would like to use your own referencing provider or collect rent directly, we can work with you on a tailored solution to still ensure your rent gets paid on the same day every month."/> 

                    <Faq question="Will i get my rent paid on the same day every month?" answer="Yes! At the time of agreeing a letting, we will provide you with a rent schedule showing on what day you will receive the rent every month. Typically, this date will be 5 calendar days after the rent due date stipulated on the AST. This allows us time to ensure the rent has been collected. If the tenant has not paid by the day shown on your rent schedule, don’t worry, Scraye will pay you this rent and recoup from the tenant (if the tenant happens to be late, we will always inform you). T&Cs apply."/>  
            </div>
        </div>
      
    </section>
  )
}

export default FaqSection
