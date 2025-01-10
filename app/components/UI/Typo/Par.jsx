export default function Par({classname, children}) {
    return (
      <p className={`text-md font-medium tracking-wide ${classname}`}>
          {children}
      </p>
    )
  }
  