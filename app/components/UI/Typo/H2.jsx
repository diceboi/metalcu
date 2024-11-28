export default function H2({classname, children}) {
    return (
      <h1 className={`text-4xl font-black ${classname}`}>
          {children}
      </h1>
    )
  }
  