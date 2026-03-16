import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex min-h-[60vh] items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <code className='font-serif text-2xl font-bold text-[#3A6D8C]'>
          AOS
        </code>

        <Loader2 className='h-6 w-6 animate-spin text-[#3A6D8C]' />
      </div>
    </div>
  )
}
