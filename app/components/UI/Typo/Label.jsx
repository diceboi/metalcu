export default function Label({classname, children}) {
    return (
      <label className={`text-sm font-regular ${classname}`}>
          {children}
      </label>
    )
  }
  