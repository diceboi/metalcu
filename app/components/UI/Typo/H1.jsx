export default function H1({classname, children}) {
  return (
    <h1 className={`text-6xl font-black ${classname}`}>
        {children}
    </h1>
  )
}
