export default function H1({classname, children}) {
  return (
    <h1 className={`lg:text-8xl md:text-5xl text-4xl font-black ${classname}`}>
        {children}
    </h1>
  )
}
