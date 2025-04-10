import React from 'react'
import Faq from '../../faq/Faq'

function DepositFreeRentFaq() {
  return (
    <section className="flex items-center justify-center p-4 md:p-8  md:pt-12 ">
    <div className='max-w-[1265px]'>
        <h1 className='font-semibold text-4xl pt-3 pb-4 text-center'>FAQs</h1>
        <div className=' w-full'>
             <Faq question="Who qualifies for Rentify deposit free?" answer="Tenants who pass Rentify’s standard referencing process will automatically be eligible for the deposit solution applicable to the property in question."/>

            <Faq question="Can I unlock my security deposit on an existing tenancy?" answer="Yes! To do so, just submit a request - it only takes a few minutes to complete. Note, we will ask you to go through a short referencing process before approving your request. Once approved, Rentify will pay you the value of your security deposit and you will be responsible for repaying Scraye at the end of the tenancy when your landlord or agent refunds your deposit."/> 

            <Faq question="Can I stil pay a traditional security deposit if I wish to?" answer="Yes, just let a Rentify team member know when you submit an offer and we will reflect this accordingly. If you’ve selected Rentify Deposit Free, you can opt out and replace our deposit with your own deposit at any time, penalty-free."/> 

            <Faq question="Who is responsible for protecting security deposit paid by Rentify?" answer="Your landlord or letting agent is responsible for protecting the security deposit paid by Rentify for your tenancy with a deposit protection scheme."/> 

            <Faq question="Who is responsible for the return of the deposit to Rentify " answer="You as the tenant are responsible for repaying the deposit to Rentify once your landlord or agent refunds the deposit at the end of the tenancy. In order for the service to work, the deposit paid by Rentify at the start of the tenancy needs to be repaid to Rentify at the end of your tenancy so we may use these funds to help other tenants with the Rentify Deposit Free service"/>

            <Faq question="Can I keep Rentify Deposit Free if I renew my tenancy?" answer="Yes, no problem! If you are renewing your tenancy and would like to keep the Rentify Deposit Free service, you will simply renew your Rentify Deposit Free agreement and pay the applicable fee for the renewal term."/>

            <Faq question="Am I still responsible for unpaid rent or damages caused?" answer="At the end of the tenancy, the standard end of tenancy checks will take place. If there are any valid and properly evidenced charges at the end of your tenancy (e.g. unpaid rent or damages caused), you will remain liable for these. If you disagree with the charges proposed by your landlord or managing agent, you will be able to raise a dispute via the relevant tenancy deposit scheme. Remember that any charges agreed between you and the landlord/agent are separately payable to the landlord, whereas the deposit needs to be returned to Scraye. Please check our T&Cs for full details."/> 

           
        </div>
    </div>
  
</section>
  )
}

export default DepositFreeRentFaq
