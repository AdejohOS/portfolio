'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Moon, SunIcon } from 'lucide-react'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      className=''
      variant='secondary'
      size='icon'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-orange-300' />
      ) : (
        <Moon className='size-4' />
      )}
      <span className='sr-only'>Toogle theme</span>
    </Button>
  )
}
