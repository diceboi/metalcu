export default function Par({classname, children}) {
    return (
      <p className={`text-md font-regular tracking-wide ${classname}`}>
          {children}
      </p>
    )
  }
  