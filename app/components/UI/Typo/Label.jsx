export default function Label({classname, children}) {
    return (
      <label className={`text-sm font-semibold ${classname}`}>
          {children}
      </label>
    )
  }
  