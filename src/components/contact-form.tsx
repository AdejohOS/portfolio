'use client'
import React from 'react'
import { Card } from './ui/card'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { ContactFormSchema, ContactFormValues } from '@/lib/schemas'
import { contactFormAction } from '@/actions/actions'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: '', email: '', message: '' }
  })

  const onSubmit: SubmitHandler<ContactFormValues> = async data => {
    const result = await contactFormAction(data)
    if (result.error) {
      toast.error('An error occured! Please try again.')
      return
    }
    toast.success('Message sent successfully!')
    reset()
  }

  return (
    <Card className='space-y-4 p-4'>
      <div>
        <h2 className='text-xl font-semibold'>Send a message</h2>

        <p className='text-xs text-muted-foreground'>
          Fill out the form below and I will get back to you shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-4 space-y-3'
        noValidate
      >
        <div>
          <Input
            id='name'
            type='text'
            placeholder='Name'
            autoComplete='given-name'
            {...register('name')}
          />
          {errors.name?.message && (
            <p className='ml-1 mt-2 text-sm text-rose-500'>
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Input
            id='email'
            type='email'
            placeholder='Email'
            autoComplete='email'
            {...register('email')}
          />
          {errors.email?.message && (
            <p className='ml-1 mt-2 text-sm text-rose-500'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Textarea
            id='message'
            placeholder='Message'
            rows={4}
            {...register('message')}
          />
          {errors.message?.message && (
            <p className='ml-1 mt-2 text-sm text-rose-500'>
              {errors.message.message}
            </p>
          )}
        </div>

        <div className='flex justify-end gap-3'>
          <Button
            onClick={() => reset()}
            variant='outline'
            type='reset'
            disabled={isSubmitting}
          >
            Reset
          </Button>
          <Button variant='theme' type='submit' disabled={isSubmitting}>
            {isSubmitting ? (
              <span className='flex items-center'>
                <Loader2 className='mr-2 size-4 animate-spin' />
                Submitting...
              </span>
            ) : (
              'Send message'
            )}
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default ContactForm
