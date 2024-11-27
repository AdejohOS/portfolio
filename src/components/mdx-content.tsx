import { HTMLProps, JSX, PropsWithChildren } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Counter from './counter'
import AuthComparisonTable from './other/auth-comparison-table'

function Code({
  children,
  ...props
}: PropsWithChildren<HTMLProps<HTMLElement>>) {
  const codeContent = typeof children === 'string' ? children : ''
  const codeHTML = highlight(codeContent)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components: MDXRemoteProps['components'] = {
  code: Code,
  Counter,
  AuthComparisonTable
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
