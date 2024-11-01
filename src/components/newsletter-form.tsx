'use client'

import { Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterSchema, NewsletterValues } from '@/lib/schemas'
import { newsletterFormAction } from '@/actions/actions'
import { toast } from 'sonner'

export default function NewsLetterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<NewsletterValues>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: ''
    }
  })

  const onSubmit: SubmitHandler<NewsletterValues> = async data => {
    const result = await newsletterFormAction(data)
    if (result.error) {
      toast.error('An error occured! Please try again.')
      return
    }
    toast.success('Subscribed successfully!')
  }

  return (
    <form action='' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className='flex justify-center md:justify-end'>
          <Input
            placeholder='email@domain.com'
            id='email'
            type='email'
            className='w-[200px] rounded-r-none bg-slate-50'
            disabled={isSubmitting}
            {...register('email')}
          />
          <Button
            type='submit'
            variant='theme'
            className='rounded-l-none'
            disabled={isSubmitting}
          >
            <Send className='size-4' />
          </Button>
        </div>
        {errors.email?.message && (
          <p className='ml-1 mt-2 flex justify-center text-sm text-rose-500 md:justify-end'>
            {errors.email.message}
          </p>
        )}
      </div>
    </form>
  )
}
