interface HeadingProps {
  title: string
  className?: string
}

const Headings = ({ title, className = '' }: HeadingProps) => {
  return (
    <h2
      className={`title inline border-b-2 border-[#FFF799] pb-2 text-3xl ${className}`}
    >
      {title}
    </h2>
  )
}

export default Headings
