'use client'

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'next-share'
import { FaShare } from 'react-icons/fa'
import { useState, useEffect } from 'react'

interface SocialShareProps {
  title?: string
}

export default function SocialShare({ title }: SocialShareProps) {
  const [url, setUrl] = useState<string>('')

  useEffect(() => {
    // Dynamically set the URL for the share buttons
    setUrl(window.location.href)
  }, [])

  return (
    <div>
      <h2 className='mt-2 flex items-center gap-2 text-sm text-muted-foreground'>
        Share this post <FaShare className='h-4' />
      </h2>
      <ul className='flex items-center gap-2'>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <FacebookShareButton
          url={url}
          title={title}
          quote={title}
          hashtag={'AOS Blog'}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <WhatsappShareButton url={url} title={title} separator=':: '>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <EmailShareButton url={url} subject={'AOS Blog'} body={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </ul>
    </div>
  )
}
