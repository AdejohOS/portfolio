import React from 'react'

import Image from 'next/image'
import ContactForm from './contact-form'

const Message = () => {
  return (
    <section className='bg-gray-50 py-20'>
      <div className='container max-w-6xl'>
        <div className=''>
          <h2 className='inline border-b-2 pb-2 text-3xl font-bold'>
            Contact Me{' '}
          </h2>
        </div>
        <div className='grid grid-cols-1 items-center gap-2 md:grid-cols-2 md:gap-4'>
          <div className='relative aspect-square'>
            <Image src='/images/message.svg' alt='contact image' fill />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Message
