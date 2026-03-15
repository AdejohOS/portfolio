'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  value: number
  suffix?: string
  duration?: number
}

export default function CountUp({
  value,
  suffix = '',
  duration = 1.5
}: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const increment = end / (duration * 60)

    const counter = setInterval(() => {
      start += increment

      if (start >= end) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
