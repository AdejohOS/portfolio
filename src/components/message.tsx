import React from 'react'

import ContactForm from './contact-form'
import Headings from './headings'
import BackgroundPattern from './ui/bg-pattern'
import { Mail, MapPin, Phone } from 'lucide-react'

const Message = () => {
  return (
    <section id='contact' className='relative isolate py-24 dark:bg-background'>
      <BackgroundPattern />
      <div className='container max-w-6xl space-y-8'>
        <div className=''>
          <Headings title='Get in Touch' />
        </div>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Let&apos;s work together</h2>
            <p>
              I am always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Mail className='size-4' /> elusivebrown@gmail.com
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='size-4' /> +234-706-3494-394
              </div>
              <div className='flex items-center gap-2'>
                <MapPin className='size-4' /> Abuja, Nigeria.
              </div>
            </div>
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
