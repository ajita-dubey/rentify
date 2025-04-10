import React from 'react'
import Faq from '../../faq/Faq'

function RentGuarantorFaq() {
  return (
    <section className="flex items-center justify-center p-4 md:p-8  md:pt-12 ">
        <div className='max-w-[1265px]'>
            <h1 className='font-semibold text-4xl pt-3 pb-4 text-center'>FAQs</h1>
            <div className=' w-full'>
                 <Faq question="Who qualifies for the India Guarantor service?" answer="We’ve built a comprehensive and inclusive referencing system. Our approach looks for patterns of reliable payment behaviour in the past and can review each request on a case-by-case basis. Note: we reserve the right to decline acting as your UK guarantor in certain instances (for example, if you provide misleading information during referencing or have an active CCJ)."/>

                <Faq question="Can you act as my India Guarantor if I am a student?" answer="Yes!"/> 

                  <Faq question="Who is liable for costs at the end of the tenancy?" answer="Tenants remain liable for any costs at the end of the tenancy such as unpaid rent or damages. In the event of a dispute, the Tenancy Deposit Scheme which initially protected the deposit provided by Scraye will be responsible for adjudicating any claims. Please note: Scraye will receive the deposit refund in full, whereas any claims will be negotiated between the tenant, landlord (and/or managing agent) and the Tenancy Deposit Scheme)."/> 

                    <Faq question="Can you act as my India Guarantor if I receive Universal Credit or DSS?" answer="Yes! On Scraye you can rent with Universal Credit or rent with DSS"/>  
            </div>
        </div>
      
    </section>
  )
}

export default RentGuarantorFaq
