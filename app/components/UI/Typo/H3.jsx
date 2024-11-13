export default function H3({classname, children}) {
    return (
      <h1 className={`text-xl font-black ${classname}`}>
          {children}
      </h1>
    )
  }
  