export default function Par({classname, children}) {
    return (
      <p className={`lg:text-md text-sm font-medium tracking-wide ${classname}`}>
          {children}
      </p>
    )
  }
  