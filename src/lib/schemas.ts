import z from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Must be at least 2 characters'),
  email: z.string().email({ message: 'Email is required' }),
  message: z.string().min(2, 'Message is required')
})
export type ContactFormValues = z.infer<typeof ContactFormSchema>

export const NewsletterSchema = z.object({
  email: z.string().email({ message: 'Email is required' })
})
export type NewsletterValues = z.infer<typeof NewsletterSchema>
