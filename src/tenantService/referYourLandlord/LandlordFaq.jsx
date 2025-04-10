import React from 'react'
import Faq from '../../faq/Faq'

function LandlordFaq() {
  return (
    <section className="flex items-center justify-center p-4 md:p-8  md:pt-12 ">
        <div className='max-w-[1265px]'>
            <h1 className='font-semibold text-4xl pt-3 pb-4 text-center'>FAQs</h1>
            <div className=' w-full'>
                 <Faq question="Terms and Conditions - Landlord referrals" 
                 answer="1.The Landlord Referral Programme allows users to earn monetary bonuses by inviting landlords to become new users on
                  Rentify. To participate, users must ask landlords for permission to introduce them to Rentify and 
                  must agree to these terms.
                    2.Users can earn rewards if: a) an invited landlord creates a Rentify account and uploads a property listing for 
                              the first time; and b) the invited landlord rents the property on Scraye (“Qualifying Activities”).
                  3.A Qualifying Activity must be completed before the inviting user receives monetary bonuses; the invited landlord must 
                     be performing a Qualifying Activity on Rentify for the first time, and must not have rented or  listed a property on
                      Rentify previously.
                 4.The property concerned in the Qualifying Activities must be located in London. We cannot currently accept
                        referrals for landlords with properties outside London.
               5.The inviting user will be credited in a bank account with the monetary bonus amount within 10 business days after the
                       invited landlord completes any of the Qualifying Activities.
              6.An invited landlord may only be invited by one user. If a landlord is invited by multiple users, only the user
                    that fulfilled the invitation form first will receive the monetary bonus.
             7.Rentify may suspend or terminate the Landlord Referral Programme or a user's ability to participate at any time for any reason.
                    Rentify reserves the right to suspend or remove Perks if any activity is noticed that appears abusive, fraudulent or 
                      in violation of Rentify's Terms of Service.Rentify reserves the right to review and investigate all invite 
                      activities and to suspend accounts or modify invites in their sole discretion as deemed fair and appropriate.
             8.The scope of the referral programme can change at any time. These terms can be updated at any time without notice."/>

                <Faq question="Terms and Conditions - Agent referrals"
                 answer="1.The Agent Referral Programme allows users to earn monetary bonuses by inviting agents to become new users on Rentify.
                  To participate, users must ask agents for permission to introduce them to Rentify and must agree to these terms.
               2.Users can earn rewards if: a) an invited agent creates a REntify account and uploads a property listing for the first time; and
                 b) the invited agent rents the property on Rentify (“Qualifying Activities”).
              3.A Qualifying Activity must be completed before the inviting user receives monetary bonuses; the invited agent must be
               performing a Qualifying Activity on Rentify for the first time, and must not have rented or listed
                a property on Scraye previously.
             4.The property concerned in the Qualifying Activities must be located in London. We cannot currently accept referrals
              for agents with properties outside London.
            5.The inviting user will be credited in a bank account with the monetary bonus amount within 10 business days after the
             invited agent completes any of the Qualifying Activities.
           6.An invited agent may only be invited by one user. If a agent is invited by multiple users, only the user that fulfilled
            the invitation form first will receive the monetary bonus.
           7.Rentify may suspend or terminate the Agent Referral Programme or a user's ability to participate at any time for any reason.\
            Rentify reserves the right to suspend or remove Perks if any activity is noticed that appears abusive, fraudulent or in violation 
            of Rentify's Terms of Service. Rentify reserves the right to review and investigate all invite activities and to suspend accounts
             or modify invites in their sole discretion as deemed fair and appropriate.
           8.The scope of the referral programme can change at any time. These terms can be updated at any time without notice."/> 
        </div>
        </div>
      </section>
  )
}

export default LandlordFaq
