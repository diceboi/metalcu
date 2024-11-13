export default function Smalltitle({classname, children}) {
    return (
      <h3 className={`text-md font-semibold uppercase tracking-widest ${classname}`}>
          {children}
      </h3>
    )
  }
  