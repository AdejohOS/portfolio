interface ContactFormEmailsProps {
  name: string
  email: string
  message: string
}

export default function ContactFormEmails({
  name,
  email,
  message
}: ContactFormEmailsProps) {
  return (
    <div>
      <h1>Contact form submission</h1>
      <p>
        From <strong>{name}</strong> at {email}
      </p>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  )
}
