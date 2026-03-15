'use client'

import { Send, Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterSchema, NewsletterValues } from '@/lib/schemas'
import { newsletterFormAction } from '@/actions/actions'
import { toast } from 'sonner'

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<NewsletterValues>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: { email: '' }
  })

  const onSubmit: SubmitHandler<NewsletterValues> = async data => {
    const result = await newsletterFormAction(data)

    if (result.error) {
      toast.error('Something went wrong. Please try again.')
      return
    }

    toast.success('Subscribed successfully!')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2' noValidate>
      <div className='flex justify-center md:justify-end'>
        <Input
          id='email'
          type='email'
          placeholder='email@domain.com'
          className='w-[220px] rounded-r-none text-white placeholder:text-white/70'
          disabled={isSubmitting}
          aria-invalid={!!errors.email}
          {...register('email')}
        />

        <Button
          type='submit'
          variant='theme'
          className='rounded-l-none'
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className='size-4 animate-spin' />
          ) : (
            <Send className='size-4' />
          )}
        </Button>
      </div>

      {errors.email?.message && (
        <p className='text-sm text-rose-500 md:text-right'>
          {errors.email.message}
        </p>
      )}
    </form>
  )
}
