interface HeadingProps {
  title: string
}

const Headings = ({ title }: HeadingProps) => {
  return <h2 className='title inline border-b-2 pb-2 text-3xl'>{title}</h2>
}

export default Headings
