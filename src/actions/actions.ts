'use server'

import ContactFormEmails from '@/emails/contact-form-emails'
import {
  ContactFormSchema,
  ContactFormValues,
  NewsletterSchema,
  NewsletterValues
} from '@/lib/schemas'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function contactFormAction(data: ContactFormValues) {
  const validatedFields = ContactFormSchema.safeParse(data)

  if (validatedFields.error) {
    return { error: validatedFields.error.format() }
  }

  try {
    const { name, email, message } = validatedFields.data
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['delivered@resend.dev'],
      cc: ['code@adejoh.dev'],
      subject: 'Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmails({ name, email, message })
    })

    if (!data || error) {
      throw new Error('Failed to send mail')
    }
    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function newsletterFormAction(data: NewsletterValues) {
  const validatedFields = NewsletterSchema.safeParse(data)

  if (validatedFields.error) {
    return { error: validatedFields.error.format() }
  }

  return { success: true }
}
