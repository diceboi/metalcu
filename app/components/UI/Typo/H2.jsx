export default function H2({classname, children}) {
    return (
      <h1 className={`lg:text6xl md:text-4xl text-3xl font-black ${classname}`}>
          {children}
      </h1>
    )
  }
  