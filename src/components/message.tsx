import React from 'react'

import Image from 'next/image'
import ContactForm from './contact-form'
import Headings from './headings'
import BackgroundPattern from './ui/bg-pattern'

const Message = () => {
  return (
    <section className='relative isolate pt-20 dark:bg-background'>
      <BackgroundPattern />
      <div className='container max-w-6xl'>
        <div className=''>
          <Headings title='Contact me' />
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
