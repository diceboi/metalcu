export default function Mainbutton({ classname, children, type }) {
  return (
    <button
      type={type}
      className={`text-md font-bold rounded-full bg-[--orange] w-fit px-4 py-2 items-center justify-center gap-2 text-white ${classname}`}
    >
      {children}
    </button>
  );
}