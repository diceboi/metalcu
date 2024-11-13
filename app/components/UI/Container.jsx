export default function Container({classname, children}) {
  return (
    <section className={`w-full py-8 lg:py-16 ${classname}`}>
        <div className='container m-auto'>
            {children}
        </div>
    </section>
  )
}
