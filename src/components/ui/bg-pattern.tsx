const BackgroundPattern = () => {
  return (
    <svg
      className='absolute inset-0 -z-10 h-full w-full stroke-zinc-200 opacity-75 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-zinc-700'
      aria-hidden='true'
    >
      <defs>
        <pattern
          id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
          width={200}
          height={200}
          x='50%'
          y={-64}
          patternUnits='userSpaceOnUse'
        >
          <path d='M100 200V.5M.5 .5H200' fill='none' />
        </pattern>
      </defs>
      <svg
        x='50%'
        y={-64}
        className='overflow-visible fill-zinc-50 dark:fill-zinc-900/75'
      >
        <path
          d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z'
          strokeWidth={0}
        />
      </svg>
      <rect
        width='100%'
        height='100%'
        strokeWidth={0}
        fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
      />
    </svg>
  )
}

export default BackgroundPattern
