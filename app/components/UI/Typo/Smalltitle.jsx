export default function Smalltitle({classname, children}) {
    return (
      <h3 className={`lg:text-md text-xs font-light uppercase tracking-widest ${classname}`}>
          {children}
      </h3>
    )
  }
  