export default function Button(props) {
  const { children, ...rest } = props
  return (
      <button className="px-3 py-1 rounded-full text-sm font-semibold text-white bg-sky-500 hover:bg-sky-700 disabled:text-gray-300 disabled:bg-gray-500" {...rest}>
            {children}
      </button>
  )
}
